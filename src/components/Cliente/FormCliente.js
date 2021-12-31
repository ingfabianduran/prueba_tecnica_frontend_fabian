import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { Select } from 'formik-semantic-ui-react';
import { Formik } from 'formik';
import { httpGet } from '../../libs/http';

function FormCliente({cliente}) {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCuidades] = useState([]);
  
  useEffect(() => {
    httpGet('http://127.0.0.1:8000/api/departamentos/index').then(res => {
      const mapDataDepartamentos = res.departamentos.map(item => {
        return { key: item.id, text: item.nombre, value: item.id };
      });
      setDepartamentos(mapDataDepartamentos);
    });
  }, []);

  return (
    <Formik
      initialValues={cliente}>
      {({ values, handleSubmit, handleChange, errors, touched }) => {
        return (
          <Card fluid>
            <Card.Content>
              <Card.Header>Nuevo Cliente</Card.Header>
            </Card.Content>
            <Card.Content>
              <Form 
                onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={8}
                      label='Nombre'
                      placeholder='Nombre del Cliente' 
                      name='nombre'
                      value={values.nombre}
                      onChange={handleChange}>
                    </Form.Input>
                    <Form.Input
                      fluid
                      width={8}
                      label='Apellido'
                      placeholder='Apellido del Cliente' 
                      name='apellido'
                      value={values.apellido}
                      onChange={handleChange}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Select
                      fluid
                      width={8}
                      label='Departamento'
                      placeholder='Departamento'
                      options={departamentos}
                      name='departamento'>
                    </Select>
                    <Select
                      fluid
                      width={8}
                      label='Ciudades'
                      placeholder='Ciudades'
                      options={ciudades}
                      name='ciudad'>
                    </Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={8}
                      label='Cedula'
                      placeholder='Cedula del Cliente' 
                      name='cedula'
                      value={values.cedula}
                      onChange={handleChange}>
                    </Form.Input>
                    <Form.Input
                      fluid
                      width={8}
                      label='Celular'
                      placeholder='Celular del Cliente' 
                      name='celular'
                      value={values.celular}
                      onChange={handleChange}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={16}
                      label='Correo'
                      placeholder='Correo del Cliente' 
                      name='correo'
                      value={values.correo}
                      onChange={handleChange}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Checkbox
                    label='Estado'
                    id='estado'
                    name='estado'
                    onChange={handleChange}
                    checked={values.terminos}>
                  </Form.Checkbox>
                  <div className='form-buttons'>
                    <Button.Group floated='right' size='huge'>
                      <Button color='green'>Registrar</Button>
                      <Button.Or />
                      <Button color='blue'>Export</Button>
                      <Button.Or />
                      <Button color='red'>Ganador</Button>
                    </Button.Group>
                  </div>
              </Form>
            </Card.Content>
          </Card>
        )
      }}
    </Formik>
  )
}

export { FormCliente };