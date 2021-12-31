import React, { useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Navbar } from './components/Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { FormCliente } from './components/Cliente/FormCliente';
import { Ganador } from './components/Components/Ganador';
import { httpPost } from './libs/http';
import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    celular: '',
    correo: '',
    terminos: true,
    ciudad: '',
    departamento: ''
  });
  const [loadingForm, setLoadingForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [ganador, setGanador] = useState({});
  const [clienteRegistrado, setClienteRegistrado] = useState({});

  const submitForm = (values) => {
    setCliente(values);
    setLoadingForm(true);
    const url = 'http://127.0.0.1:8000/api/clientes/store';
    httpPost(url, values).then(res => {
      if (res.hasOwnProperty('cliente') && !res.hasOwnProperty('ganador')) {
        setTimeout(() => {
          toast.success(`El cliente ${res.cliente.nombre} ha sido registrado correctamente`);
          setLoadingForm(false);
          setCliente({
            nombre: '',
            apellido: '',
            cedula: '',
            celular: '',
            correo: '',
            terminos: true,
            ciudad: '',
            departamento: ''
          });
        }, 2000);
      } else if (res.hasOwnProperty('cliente') && res.hasOwnProperty('ganador')) {
        setTimeout(() => {
          setLoadingForm(false);
          setGanador(res.ganador);
          setClienteRegistrado(res.cliente);
          setOpenModal(true);
          setCliente({
            nombre: '',
            apellido: '',
            cedula: '',
            celular: '',
            correo: '',
            terminos: true,
            ciudad: '',
            departamento: ''
          });
        }, 2000);
      }
    }).catch(err => {

    });
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Container>
        <Ganador
          open={openModal}
          setOpen={setOpenModal}
          ganador={ganador}
          clienteRegistrado={clienteRegistrado}>
        </Ganador>
        <ToastContainer toastClassName='font-main' />
        <Grid verticalAlign='middle' centered>
          <Grid.Row className='row-main'>
            <Grid.Column width={16}>
              <FormCliente
                cliente={cliente}
                submitForm={submitForm}
                loadingForm={loadingForm}>
              </FormCliente>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
