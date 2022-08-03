import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ Pagar }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState();
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const datos = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
  };

  const cobrar = () => {
    if (nombre === "" || apellido === "" || telefono === "" || email === "") {
      return;
    } else {
      Pagar(datos).then(navigate("/products"));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 text-4xl text">
        <h1 className="bg-blue-700 p-5 mt-24 text-white rounded-2xl">
          Datos Del Comprador
        </h1>
        <form>
          <label className="underline flex justify-center mt-7">Nombre</label>
          <input
            className="border border-black mt-2 p-3"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe aquí tu Nombre"
          />
          <br />

          <label className="underline flex justify-center mt-7">
            Apellido:
          </label>
          <input
            className="border border-black mt-2 p-3"
            type="text"
            required
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Escribe aquí tu Apellido"
          />
          <br />

          <label className="underline flex justify-center mt-7">Tel:</label>
          <input
            className="border border-black mt-2 p-3"
            type="number"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="1100220033"
          />
          <br />

          <label className="underline flex justify-center mt-7">e-Mail:</label>
          <input
            className="border border-black mt-2 p-3"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@email.com"
          />
          <div className="flex justify-center">
            <button
              className="mt-7 bg-blue-700 text-2xl text-white mb-10 p-3 rounded-3xl opacity-90 px-16"
              type="submit"
              name="search"
              onClick={cobrar}
            >
              Pagar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
