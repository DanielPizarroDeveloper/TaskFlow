/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Detalle } from './Detalle';
import { Eliminar } from './Eliminar';
import { Actualizar } from './Actualizar';
import { Dialog, Pane, Tab, Tablist } from 'evergreen-ui';

import '../../../css/ModalTask/Task/Eliminar.css';

export function Opcion({ isOption, setIsOption, proyecto, callbackRefresh }) {
  const [isShown] = useState(isOption);
  const [tabs] = useState(['Detalle', 'Actualizar', 'Eliminar']);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeIsShown = () => {
    setIsOption((prevState) => !prevState);
  }

  return (
    <Dialog
      isShown={isShown}
      title='Opciones del proyecto'
      intent='danger'
      confirmLabel='Eliminar'
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
              <Eliminar
                proyectoSeleccioando={proyecto}
                changeIsShown={changeIsShown}
                callbackRefresh={callbackRefresh}
              />
            ) : tab === 'Actualizar' ? (
              <Actualizar 
                proyectoSeleccioando={proyecto}
                changeIsShown={changeIsShown}
              />
            ) : (
              <Detalle
                proyectoSeleccioando={proyecto}
              />
            )}
          </Pane>
        ))}
    </Dialog>
  )
}