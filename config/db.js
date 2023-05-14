import {Sequelize} from 'sequelize';

const db = new Sequelize('id20751401_topup_game','id20751401_masbro_topupgame','m@sbroDB23',{
    host : 'databases.000webhost.com',
    dialect : 'mysql',
});

export default db;