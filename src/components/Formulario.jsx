import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [mail, setMail] = useState("");

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
      alert(`nombre: ${nombre} apellido: ${apellido} `);
    } else {
      alert(validaciones());
    }

    console.log(
      `nombre: ${nombre} apellido: ${apellido} dni: ${dni} mail: ${mail} `
    );
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre </Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese un Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese un Apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dni</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingrese un Dni"
            onChange={(e) => setDni(e.target.value)}
            value={dni}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="ingrese un Mail"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
