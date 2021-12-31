import * as yup from 'yup';

function defaultMessages() {
  const messages = {
    required: 'El campo es requerido',
    string: 'El campo debe ser tipo texto',
    number: 'El campo debe ser numerico',
    email: 'El campo debe ser un correo'
  };
  return messages;
}

function validateCliente() {
  const objectValidator = yup.object({
    nombre: yup.string(defaultMessages().string).required(defaultMessages().required),
    apellido: yup.string(defaultMessages().string).required(defaultMessages().required),
    cedula: yup.number(defaultMessages().number).required(defaultMessages().required),
    celular: yup.number(defaultMessages().number).required(defaultMessages().required),
    correo: yup.string(defaultMessages().string).email(defaultMessages().email).required(defaultMessages().required),
    ciudad: yup.number(defaultMessages().number).required(defaultMessages().required),
    departamento: yup.number(defaultMessages().number).required(defaultMessages().required),
  });
  return objectValidator;
}

export { validateCliente };