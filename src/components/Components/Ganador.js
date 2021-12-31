import React from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';

function Ganador({open, setOpen, ganador, clienteRegistrado}) {
  return(
    <Modal
      basic
      open={open}
      size='small'>
      <Header icon>
        <Icon name='hand victory' />
        <h2>Hubo Ganador!!!</h2>
      </Header>
      <Modal.Content>
        <h2>{`El ganador del concurso es el Señor(a) ${ganador.nombre} ${ganador.apellido}`}</h2>
        <h3>{`Ademas se registro el cliente ${clienteRegistrado.nombre} ${clienteRegistrado.apellido}`}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color='green'
          inverted
          onClick={() => setOpen(false)}>
          Entendido
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export { Ganador };