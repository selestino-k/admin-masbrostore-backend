import {Sequelize} from 'sequelize';

const db = new Sequelize('topup_game','masbro','masbro-storekpg',{
    host : '209.97.172.239',
    dialect : 'mysql',
});

// const db = new Sequelize('topup_game','root','',{
//     host : 'localhost',
//     dialect : 'mysql',
// });


export default db;