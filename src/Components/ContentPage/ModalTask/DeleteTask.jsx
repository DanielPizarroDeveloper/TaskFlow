import { Dialog, Pane } from "evergreen-ui"
import { useState } from "react"

export function DeleteTask({tituloActividad, color, estado, descripcion, isTalked, onActivate}) {
  const [isShown, setIsShown] = useState(isTalked)
  const handleClose = () => {
    onActivate();
  };

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Eliminar Actividad"
        intent="danger"
        confirmLabel="Eliminar"
        onCloseComplete={handleClose}
        onCancel={handleClose}
        hasCancel={false}
      >
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{fontFamily: 'monospace', fontSize: '14px'}}>¿Estas seguro de que quieres eliminar la siguiente actividad?</p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p style={{fontFamily: 'monospace', fontSize: '14px', color: color}}><strong>Actividad:</strong></p>
            <p style={{fontFamily: 'monospace', fontSize: '14px'}}>{tituloActividad}</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p style={{fontFamily: 'monospace', fontSize: '14px', color: color}}><strong>Estado:</strong></p>
            <p style={{fontFamily: 'monospace', fontSize: '14px'}}>{estado}</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p style={{fontFamily: 'monospace', fontSize: '14px', color: color}}><strong>Descripción</strong></p>
            <p style={{fontFamily: 'monospace', fontSize: '14px'}}>{descripcion}</p>
          </div>
        </div>
      </Dialog>
    </Pane>
  )
}