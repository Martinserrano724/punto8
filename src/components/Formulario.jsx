import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [mail, setMail] = useState("");
 let valicacionForm='d-none bg-primary'

  const valicacionNombreApellido = (texto) => {
    if (texto != "" && texto.length < 100) {
      return true;
    } else {
      return false;
    }
  };
  const valicacionDni= (dni) => {
    if (dni>= 1000000 && dni<= 99000000) {
      return true;
    } else {
      return false;
    }
  };

  const validaciones = () => {
    const validacionMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validacion = "";
    if (!valicacionNombreApellido(nombre)) {
      validacion += "ERROR Nombre incorrecto \n nombre deve contener un caracter y tener como maximo 100 caracteres \n";
    }
    if (!valicacionNombreApellido(apellido)) {
      validacion += "ERROR apellido incorrecto \n apellido deve contener un caracter y tener como maximo 100 caracteres \n";
    }
    if (!valicacionDni(dni)) {
      validacion += "ERROR dni incorrecto \n dni desde: numero 1000000 hasta 99000000 \n";
    }
    if (!validacionMail.test(mail)) {
      validacion += "ERROR mail incorrecto \n  \n";
    }

    return validacion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validaciones() == "") {
        Swal.fire({
            title: 'Formulario',
            text: 'Datos Enviados',
            icon: 'success',
          })
    } else {
      Swal.fire({
        title: 'ERROR',
        text: `${validaciones()}`,
        icon: 'error',
      })
    }

    
  };
  return (
    <div className="d-flex justify-content-center d-inline">
    
      <div className=" contenedorFormulario">
        <div>
        <h3 className="text-center tituloFormulario">Formulario</h3>
        </div>
     
      <Form onSubmit={handleSubmit} className="">
        <Form.Group className="mb-2 p-1">
          <Form.Label>Nombre </Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese un Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            required
            minLength={1}
            maxLength={100}
            
          
          />
        </Form.Group>
        <Form.Group className="mb-2 ps-1 pe-1">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese un Apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
            required
            minLength={1}
            maxLength={100}
            
          />
          
        </Form.Group>
        <Form.Group className="mb-2 ps-1 pe-1">
          <Form.Label>Dni</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingrese un Dni"
            onChange={(e) => setDni(e.target.value)}
            value={dni}
            required
            min={1000000}
            max={99999999}
          />
        </Form.Group>
        <Form.Group className="mb-2 ps-1 pe-1">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="ingrese un Mail"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            required
          />
        </Form.Group>
<div className="d-flex justify-content-center">
        <Button className="" type="submit">
          Submit
        </Button></div>
      </Form>
 
      </div>
    </div>
  );
};

export default Formulario;
