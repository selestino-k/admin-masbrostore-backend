import {Sequelize} from 'sequelize';

const db = new Sequelize('topup_game','admin','e5c09b96cd65fce2aca48d2d1ac8328f0cfcb26a056926fa',{
    host : '209.97.172.239',
    dialect : 'mysql',
});

// const db = new Sequelize('topup_game','root','',{
//     host : 'localhost',
//     dialect : 'mysql',
// });


export default db;