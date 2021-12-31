import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { Select } from 'formik-semantic-ui-react';
import { Formik } from 'formik';
import { httpGet } from '../../libs/http';
import { validateCliente } from '../../validators/validators';

function FormCliente({cliente, submitForm, loadingForm}) {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCuidades] = useState([]);
  const [loadingCiudades, setLoadingCiudades] = useState(false);
  
  useEffect(() => {
    getDepartamentos();
  }, []);

  const getDepartamentos = () => {
    const url = 'http://127.0.0.1:8000/api/departamentos/index';
    httpGet(url).then(res => {
      const mapDataDepartamentos = res.departamentos.map(item => {
        return { key: item.id, text: item.nombre, value: item.id };
      });
      setDepartamentos(mapDataDepartamentos);
    }).catch(err => {

    });
  };

  const getCuidades = (e, data) => {
    setLoadingCiudades(true);
    const url = `http://127.0.0.1:8000/api/departamentos/${data.value}`;
    httpGet(url).then(res => {
      const mapDataCiudades = res.departamento.ciudads.map(item => {
        return { key: item.id, text: item.nombre, value: item.id };
      });
      setTimeout(() => {
        setLoadingCiudades(false);
        setCuidades(mapDataCiudades);
      }, 2000);
    }).catch(err => {

    });
  };

  const generateExcel = (e) => {
    const url = 'http://127.0.0.1:8000/api/clientes/export';
    window.open(url, '_blank');
  };

  return (
    <Formik
      enableReinitialize
      initialValues={cliente}
      validationSchema={validateCliente}
      onSubmit={values => submitForm(values)}>
      {({ values, handleSubmit, handleChange, errors, touched }) => {
        return (
          <Card fluid>
            <Card.Content>
              <Card.Header>Nuevo Cliente</Card.Header>
            </Card.Content>
            <Card.Content>
              <Form
                loading={loadingForm} 
                onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={8}
                      label='Nombre'
                      placeholder='Nombre del Cliente' 
                      name='nombre'
                      value={values.nombre}
                      onChange={handleChange}
                      error={touched.nombre && errors.nombre ? errors.nombre : null}>
                    </Form.Input>
                    <Form.Input
                      fluid
                      width={8}
                      label='Apellido'
                      placeholder='Apellido del Cliente' 
                      name='apellido'
                      value={values.apellido}
                      onChange={handleChange}
                      error={touched.apellido && errors.apellido ? errors.apellido : null}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Select
                      fluid
                      width={8}
                      label='Departamento'
                      placeholder='Departamento'
                      options={departamentos}
                      name='departamento'
                      onChange={getCuidades}
                      error={touched.departamento && errors.departamento ? errors.departamento : null}>
                    </Select>
                    <Select
                      fluid
                      width={8}
                      label='Ciudades'
                      placeholder='Ciudades'
                      options={ciudades}
                      name='ciudad'
                      loading={loadingCiudades}
                      error={touched.ciudad && errors.ciudad ? errors.ciudad : null}>
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
                      onChange={handleChange}
                      error={touched.cedula && errors.cedula ? errors.cedula : null}>
                    </Form.Input>
                    <Form.Input
                      fluid
                      width={8}
                      label='Celular'
                      placeholder='Celular del Cliente' 
                      name='celular'
                      value={values.celular}
                      onChange={handleChange}
                      error={touched.celular && errors.celular ? errors.celular : null}>
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
                      onChange={handleChange}
                      error={touched.correo && errors.correo ? errors.correo : null}>
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
                      <Button 
                        color='green'
                        type='submit'>
                        Registrar
                      </Button>
                      <Button.Or />
                      <Button 
                        color='red'
                        onClick={generateExcel}
                        type='button'>
                        Export
                      </Button>
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