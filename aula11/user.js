import { DataTypes } from "sequelize";
import sequelizeDatabase from "./database.js";  
let sequelize = await import("./database.js");

const User = sequelizeDatabase.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export default User;