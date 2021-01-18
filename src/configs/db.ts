import { Sequelize } from "sequelize";
require('dotenv').config();

class DB {
    private db: Sequelize;
    constructor(){
        this.db = new Sequelize(process.env.DB_STRING);
    }
    getDB(){
        return this.db;
    }

}
const DBSingleton = new DB();
export {
    DBSingleton
}