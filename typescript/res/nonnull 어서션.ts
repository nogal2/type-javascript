type VisibleDialog = {id: string}
type DetroyedDialog = {}
type Dialog = VisibleDialog | DetroyedDialog;

function closeDialog(dialog: Dialog) {
    if (!('id' in dialog)) {
        return
    }

    setTimeout(() =>
        removeFromDom(
            dialog,
            document.getElementById(dialog.id)!
        )
    )
}

function removeFromDom(dialog:VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element)

    delete dialog.id
}


