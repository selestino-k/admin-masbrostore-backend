import {Sequelize} from 'sequelize';


const db = new Sequelize('topup_game','masbro','AVNS_GoK3DC9d-Jnprw2Djgr',{
    host : 'db-mysql-sgp1-11782-do-user-14103014-0.b.db.ondigitalocean.com',
    port : '25060',
    dialect : 'mysql',
});

// const db = new Sequelize('topup_game','masbro','masbro-storekpg',{
//     host : '209.97.172.239',
//     port :'3306',
//     dialect : 'mysql'
// });

// const db = new Sequelize('topup_game','root','',{
//     host : 'localhost',
//     dialect : 'mysql',
// });



export default db;