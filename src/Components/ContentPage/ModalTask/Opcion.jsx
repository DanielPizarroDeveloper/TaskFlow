/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Delete } from './Delete';
import { Detalle } from './Detalle';
import { Actualizar } from './Actualizar';
import { Dialog, Pane, Tab, Tablist } from 'evergreen-ui';

export function Opcion ({taskID, ID, proyecto, tituloActividad, estado, descripcion, isTalked, onActivate, callbackFunction, deleteTaskSelected}) {
  const [isShown] = useState(isTalked);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(['Detalle', 'Actualizar', 'Eliminar']);

  return (
    <Dialog
      isShown={isShown}
      title='Opciones de la actividad'
      intent='danger'
      confirmLabel='Eliminar'
      hasCancel={false}
      hasFooter={false}
      onCloseComplete={() => {
        onActivate(isTalked);
      }}
    >
      <Tablist marginBottom={16} display={'flex'} justifyContent={'space-evenly'} flexBasis={240}>
        {tabs.map((tab, index) => (
          <Tab
            aria-controls={`panel-${tab}`}
            isSelected={index === selectedIndex}
            key={tab}
            onSelect={() => setSelectedIndex(index)}
            style={{color: '#0f95cd'}}
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
            {tab === 'Eliminar' ? (
              <Delete 
                  taskID={taskID}
                  ID={ID}
                  proyecto={proyecto}
                  tituloActividad={tituloActividad}
                  estado={estado}
                  descripcion={descripcion}
                  callbackFunction={callbackFunction} 
                  deleteTaskSelected={deleteTaskSelected}
                  onActivate={onActivate}
              />
            ) : tab === 'Actualizar' ? (
              <Actualizar 
                taskID={taskID}
                ID={ID}
                proyecto={proyecto}
                tituloActividad={tituloActividad}
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
                estado={estado}
                descripcion={descripcion}
              />
            )}
          </Pane>
        ))}
    </Dialog>
  )
}