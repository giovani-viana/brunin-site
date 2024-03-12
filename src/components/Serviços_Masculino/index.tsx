import React from "react";

const ServicesDB = [
  {
    nome: "Corte",
    tempo: "30M",
    preço: "R$ 30,00",
  },
  {
    nome: "Barba",
    tempo: "2h",
    preço: "R$ 30,00",
  },
  {
    nome: "Pacote",
    tempo: "4h",
    preço: "R$ 30,00",
  },
  {
    nome: "Pacote",
    tempo: "2h",
    preço: "R$ 30,00",
  },
];

const Serviços_Masculino: React.FC = () => {
  return (
    <div className="table-container">
      <h1 className="table-header">Serviços Masculino</h1>
      <div className="table">
        {ServicesDB.map((service) => (
          <div className="table-row">
            <div className="table-cell">{service.nome}</div>
            <div className="table-cell">{service.tempo}</div>
            <div className="table-cell">
              {service.preço}
              <button className="table-button">Button</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serviços_Masculino;
