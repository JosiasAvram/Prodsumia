import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold mt-10 ml-5 text-center">
          Bienvenidos a Prodsumia-PC
        </h1>
      </div>
      <div className="flex">
        <div className="flex flex-col p-12">
          <div className="flex justify-around items-center">
            <h2 className="text-4xl font-bold mt-10 ml-5 text-center italic">Aquí encontraras todo lo que necesitas para tu PC</h2>
            <img
              className="p-4 mt-10 rounded-full drop-shadow-2xl"
              src="https://www.ekipos.com/inventarios-img/190828-222222_00.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-row-reverse justify-around items-center">
            <h2 className="text-5xl font-bold mt-10 ml-5 text-center underline text-blue-700 font-sans"><Link to={"/products"}>Ir a La tienda</Link></h2>
            <img
              className="p-4 mt-10 rounded-full drop-shadow-2xl"
              src="https://pbs.twimg.com/media/EqFa-ACXMAUTDIA.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="p-4 mt-10 drop-shadow-2xl"
              src="https://www.computersupplyhn.com/img/hero/computer_supply_tienda_interior.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
