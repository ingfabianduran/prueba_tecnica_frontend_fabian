import React, { useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Navbar } from './components/Components/Navbar';
import { FormCliente } from './components/Cliente/FormCliente';
import {  } from './css/index.css';

function App() {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    celular: "",
    correo: "",
    terminos: true,
    ciudad: ""
  });

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Container>
        <Grid verticalAlign='middle' centered>
          <Grid.Row className='row-main'>
            <Grid.Column width={16}>
              <FormCliente
                cliente={cliente}>
              </FormCliente>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
