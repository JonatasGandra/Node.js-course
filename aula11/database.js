import { Sequelize } from "sequelize";

const sequelizeDatabase = async () => {
    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "./database.sqlite",
    });

    // Sincroniza o banco de dados (recria tabelas)
    await sequelize.sync({ force: true });

    return sequelize;
};

export default sequelizeDatabase;
