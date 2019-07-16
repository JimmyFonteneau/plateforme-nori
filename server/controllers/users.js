import users from 'users.json';
const fs = require("fs");


const addUser = (email, password, profil) => {
    const content = fs.readFileSync("users.json");
    const users = JSON.parse(content);
    users.push({id: Date.now(), email, password, profil});    
    fs.writeFileSync('users.json', JSON.stringify(users));
}

const checkAuthentication = (email= 'toto@toto.com', password= 'ta mère') => {
    const content = fs.readFileSync("users.json");
    const users = JSON.parse(content);
    const result = users.find(user => (user.email === email && user.password === password))
    return result;
}

const getById = (id= "test") => {
    const content = fs.readFileSync("users.json");
    const users = JSON.parse(content);
    const result = users.find(user => user.id === id)    
    return result;
}

module.exports.addUser = addUser;
module.exports.checkAuthentication = checkAuthentication;
module.exports.getById = getById;