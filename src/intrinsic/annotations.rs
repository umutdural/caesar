//! Intrinsic annotations
use std::rc::Rc;

use ariadne::ReportKind;

use crate::{
    ast::{
        DeclKind, Diagnostic, Direction, Expr, Files, Ident, Label, Param, SourceFilePath, Span,
        Spanned, Stmt, Symbol,
    },
    front::{
        resolve::{Resolve, ResolveError},
        tycheck::{Tycheck, TycheckError},
    },
    proof_rules::Encoding,
    slicing::selection::SliceAnnotation,
    tyctx::TyCtx,
};

#[derive(Debug, Clone)]
pub struct AnnotationDecl {
    pub name: Ident,
    pub inputs: Spanned<Vec<Param>>,
    pub span: Span,
}

#[derive(Debug)]
pub enum AnnotationError {
    NotInProcedure(Span, Ident),
    NotOnWhile(Span, Ident, Stmt),
    WrongArgument(Span, Expr, String),
    NotTerminator(Span, Ident),
    CalculusEncodingMismatch(Direction, Span, Ident, Ident),
    UnknownAnnotation(Span, Ident),
}

impl AnnotationError {
    pub fn diagnostic(self) -> Diagnostic {
        match self {
            AnnotationError::NotInProcedure(span, annotation) => {
                Diagnostic::new(ReportKind::Error, span)
                    .with_message(format!(
                        "The annotation `{}` can only be used inside a procedure.",
                        annotation
                    ))
                    .with_label(
                        Label::new(annotation.span).with_message("here"),
                    )
            }
            AnnotationError::NotOnWhile(span, annotation, annotated) => {
                Diagnostic::new(ReportKind::Error, span)
                    .with_message(format!(
                        "The proof rule `{}` must be used on a while loop.",
                        annotation
                    ))
                    .with_label(
                        Label::new(annotated.span).with_message("This should be a while statement"),
                    )
            }
            AnnotationError::WrongArgument(span, arg, message) => {
                Diagnostic::new(ReportKind::Error, span)
                    .with_message(message)
                    .with_label(Label::new(arg.span).with_message("here"))
            }
            AnnotationError::NotTerminator(span, encoding_name) => {
                Diagnostic::new(ReportKind::Error, span)
                    .with_message(format!(
                        "The '{}' annotation must annotate the last statement of the program.",
                        encoding_name.name
                    ))
                    .with_label(Label::new(span).with_message(
                        "There must not be any statements after this annotated statement (and the annotated statement must not be nested in a block).",
                    ))
            }
            AnnotationError::CalculusEncodingMismatch(direction, span, calculus_name, encoding_name ) => {
                Diagnostic::new(ReportKind::Error, span)
                    .with_message(format!(
                        "In {}s, the '{}' calculus does not support the '{}' encoding.",
                        direction.prefix("proc"), calculus_name.name, encoding_name.name
                    ))
                    .with_label(Label::new(span).with_message(
                        "The calculus, proof rule, and direction are incompatible.",
                    ))
            }
            AnnotationError::UnknownAnnotation(span, anno_name ) => {
                Diagnostic::new(ReportKind::Error, span)
                    .with_message(format!(
                        "The '{}' annotation is unknown.",
                        anno_name.name
                    ))
                    .with_label(Label::new(span).with_message(
                        "This annotation is not defined.",
                    ))
            }
        }
    }
}

#[derive(Debug, Clone)]
pub struct Calculus {
    pub name: Ident,
    pub calculus_type: CalculusType,
}

#[derive(Debug, Clone)]

pub enum CalculusType {
    Wp,
    Wlp,
    Ert,
}

pub struct CalculusAnnotationError;

#[derive(Debug, Clone)]
pub enum AnnotationKind {
    Encoding(Rc<dyn Encoding>),
    Calculus(Calculus),
    Slicing(Rc<SliceAnnotation>),
}

impl AnnotationKind {
    pub fn name(&self) -> Ident {
        match self {
            AnnotationKind::Encoding(encoding) => encoding.name(),
            AnnotationKind::Calculus(calculus) => calculus.name,
            AnnotationKind::Slicing(annotation) => annotation.ident,
        }
    }

    pub fn tycheck(
        &self,
        tycheck: &mut Tycheck<'_>,
        call_span: Span,
        args: &mut [Expr],
    ) -> Result<(), TycheckError> {
        match self {
            AnnotationKind::Encoding(encoding) => encoding.tycheck(tycheck, call_span, args),
            AnnotationKind::Calculus(_) => Ok(()),
            AnnotationKind::Slicing(annotation) => annotation.tycheck(tycheck, call_span, args),
        }
    }

    pub fn resolve(
        &self,
        resolve: &mut Resolve<'_>,
        call_span: Span,
        args: &mut [Expr],
    ) -> Result<(), ResolveError> {
        match self {
            AnnotationKind::Encoding(encoding) => encoding.resolve(resolve, call_span, args),
            AnnotationKind::Calculus(_) => Ok(()),
            AnnotationKind::Slicing(_) => Ok(()), // at the moment, these don't need the resolver
        }
    }
}

/// Typecheck annotation call
pub fn check_annotation_call(
    tycheck: &mut Tycheck<'_>,
    span: Span,
    annotation: &AnnotationDecl,
    args: &mut [Expr],
) -> Result<(), TycheckError> {
    tycheck.check_call(span, &annotation.inputs.node, args)?;
    Ok(())
}

/// Add all built-in calculus annotations as globals into the [`TyCtx`].
pub fn init_calculi(files: &mut Files, tcx: &mut TyCtx) {
    let file = files
        .add(SourceFilePath::Builtin, "calculus".to_string())
        .id;

    let wp = AnnotationKind::Calculus(Calculus {
        name: Ident::with_dummy_file_span(Symbol::intern("wp"), file),
        calculus_type: CalculusType::Wp,
    });
    tcx.add_global(wp.name());
    tcx.declare(DeclKind::AnnotationDecl(wp));

    let wlp = AnnotationKind::Calculus(Calculus {
        name: Ident::with_dummy_file_span(Symbol::intern("wlp"), file),
        calculus_type: CalculusType::Wlp,
    });
    tcx.add_global(wlp.name());
    tcx.declare(DeclKind::AnnotationDecl(wlp));

    let ert = AnnotationKind::Calculus(Calculus {
        name: Ident::with_dummy_file_span(Symbol::intern("ert"), file),
        calculus_type: CalculusType::Ert,
    });
    tcx.add_global(ert.name());
    tcx.declare(DeclKind::AnnotationDecl(ert));
}
