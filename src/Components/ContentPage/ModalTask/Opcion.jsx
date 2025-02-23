/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Delete } from './Delete';
import { Detalle } from './Detalle';
import { Actualizar } from './Actualizar';
import { Dialog, Pane, Tab, Tablist } from 'evergreen-ui';

import '../../../css/ModalTask/Task/Eliminar.css';

export function Opcion({taskID, ID, proyecto, tituloActividad, color, estado, descripcion, isTalked, onActivate, callbackFunction, deleteTaskSelected}) {
    const [isShown] = useState(isTalked);

    const [tabs] = useState(['Detalle Actividad', 'Actualizar Actividad', 'Eliminar Actividad']);
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleClose = () => {
      onActivate();
    }

    return (
        <Dialog
          isShown={isShown}
          header={close}
          intent='danger'
          confirmLabel='Eliminar'
          onCloseComplete={handleClose}
          onCancel={handleClose}
          hasCancel={false}
          hasFooter={false}
        >
            <Tablist marginBottom={16} display={'flex'} justifyContent={'center'} flexBasis={240} marginRight={24}>
              {tabs.map((tab, index) => (
                <Tab
                  aria-controls={`panel-${tab}`}
                  isSelected={index === selectedIndex}
                  key={tab}
                  onSelect={() => setSelectedIndex(index)}
                  style={{color: color}}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
      
            {tabs.map((tab, index) => (
              <Pane
                key={tab}
                aria-labelledby={`panel-${tab}`}
                role="tabpanel"
                display={index === selectedIndex ? 'block' : 'none'}
              >
                {tab === 'Eliminar Actividad' ? (
                  <Delete 
                      taskID={taskID}
                      ID={ID}
                      proyecto={proyecto}
                      tituloActividad={tituloActividad}
                      color={color}
                      estado={estado}
                      descripcion={descripcion}
                      callbackFunction={callbackFunction} 
                      deleteTaskSelected={deleteTaskSelected}
                      onActivate={onActivate}
                  />
                ) : tab === 'Actualizar Actividad' ? (
                  <Actualizar 
                    taskID={taskID}
                    ID={ID}
                    proyecto={proyecto}
                    tituloActividad={tituloActividad}
                    color={color}
                    estado={estado}
                    descripcion={descripcion}
                    callbackFunction={callbackFunction} 
                    deleteTaskSelected={deleteTaskSelected}
                    onActivate={onActivate}
                  />
                ) : (
                  <Detalle
                    proyecto={proyecto}
                    tituloActividad={tituloActividad}
                    color={color}
                    estado={estado}
                    descripcion={descripcion}
                  />
                )}
              </Pane>
            ))}
        </Dialog>
    )
}