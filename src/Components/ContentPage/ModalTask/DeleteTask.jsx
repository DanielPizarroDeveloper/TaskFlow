import { Dialog, Pane } from "evergreen-ui"
import { useState } from "react"

export function DeleteTask({isTalked, onActivate}) {
  const [isShown, setIsShown] = useState(isTalked)

  const handleClose = () => {
    onActivate();
  };

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Dialog title"
        intent="danger"
        confirmLabel="Eliminar"
        onCloseComplete={handleClose}
        onCancel={handleClose}
        hasCancel={false}
      >
        ¿Estas seguro de que quieres eliminar esta actividad?
      </Dialog>
    </Pane>
  )
}