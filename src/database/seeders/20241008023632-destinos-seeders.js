'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('destinos', [
      {
        destino_nome: "Avenida Pasteur, Botafogo",
        descricao: "Bondinho do Pão de Açucar",
        cep: "22290240",
        localizacao: "Rio de Janeiro, RJ",
        latitude: "-16.7143625",
        longitude: "-49.3028444",
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua Seriema, Arpoador",
        descricao: "Praia do Arpoador",
        cep: "28956000",
        localizacao: "Armação dos Búzios, RJ",
        latitude: "-26.417729",
        longitude: "-48.7963745",
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Estrada do Corcovado, Cosme Velho",
        descricao: "Cristo Redentor",
        cep: "22241370",
        localizacao: "Rio de Janeiro, RJ",
        latitude: "-22.9518779",
        longitude: "-43.2116611",
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua Jornalista Assis Chateaubriand, Centro",
        descricao: "Parque da Luz",
        cep: "88010150",
        localizacao: "Florianópolis, SC",
        latitude: "-22.1889948",
        longitude: "-46.737725",
        usuario_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Caminho da Praia, Barra da Lagoa",
        descricao: "Barra da Lagoa",
        cep: "88061233",
        localizacao: "Florianópolis, SC",
        latitude: "-12.570889",
        longitude: "-38.0002831",
        usuario_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua Pontal do Atalaia, Praia Grande",
        descricao: "Mirante Pongaloa",
        cep: "28930000",
        localizacao: "Arraial do Cabo, RJ",
        latitude: "-27.598726",
        longitude: "-48.558485",
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua Margarete, Ferradurinha",
        descricao: "Praia da Ferradurinha",
        cep: "28950000",
        localizacao: "Armação dos Búzios, RJ",
        latitude: "-22.7795449",
        longitude: "-41.9089055",
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua José Ribeiro Vasconcelos, Maragogi",
        descricao: "Mirante de Maragogi",
        cep: "57955000",
        localizacao: "Maragogi, AL",
        latitude: "-22.748072",
        longitude: "-41.885874",
        usuario_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua dos Sabiás, Barrerinhas",
        descricao: "Parque das Dunas",
        cep: "65590000",
        localizacao: "Barreirinhas, MA",
        latitude: "-2.7549383",
        longitude: "-42.8168117",
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destino_nome: "Rua Porto Canoas, Foz do Iguaçu",
        descricao: "Cataratas do Iguaçu",
        cep: "85855750",
        localizacao: "Foz do Iguaçu, PR",
        latitude: "-25.6919834",
        longitude: "-54.4403308",
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('destinos', null, {});

  }
};
