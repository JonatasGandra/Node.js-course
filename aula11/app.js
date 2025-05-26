import sequelizeDatabase from "./database"; 
import User from "./user";

const App = async () => {
    await sequelizeDatabase();
    await User.sync({ force: true });
}

const user = await User.create({
    name: "Jonatas",
    email: "jonatas@gmail.com"
});
console.log(user.toJSON());

App()