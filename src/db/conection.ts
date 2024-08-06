import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', 'bigotes123', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;