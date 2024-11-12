import { div, li } from "framer-motion/client";
import React from "react";

interface Servicio {
  id: number;
  name: string;
  age: number;
}

const servicios: Servicio[] = [
  { id: 1, name: "Jaime", age: 25 },
  { id: 2, name: "Juan", age: 27 },
  { id: 3, name: "Maria", age: 22 },
  { id: 4, name: "Pedro", age: 24 },
];

const ServiciosList: React.FC = () => {
  return (
    <div className="text-white">
      <h2>Servicios</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <h3>{servicio.name}</h3>
            <p>{servicio.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiciosList;
