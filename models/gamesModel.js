import {Sequelize} from 'sequelize';
import db from '../config/db.js';

const {DataTypes} = Sequelize;

const Gamelist = db.define('games',{
    Amount : DataTypes.STRING,
    Price : DataTypes.STRING,
    Game : DataTypes.STRING,

},{
    freezeTableName:true
    
});

export default Gamelist;

(async()=>{
    await db.sync();
})