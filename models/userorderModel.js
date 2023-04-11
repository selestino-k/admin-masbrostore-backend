import {Sequelize} from 'sequelize';
import db from '../config/db.js';

const {DataTypes} = Sequelize;

const Userorder = db.define('userorder',{
    Email : DataTypes.STRING,
    Amount : DataTypes.STRING,
},{
    freezeTableName:true
    
});

export default Userorder;

(async()=>{
    await db.sync();
})