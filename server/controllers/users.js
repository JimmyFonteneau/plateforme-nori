const fs = require("fs");
const jwt = require('jsonwebtoken');

const addUser = (email, password, profil) => {
    const content = fs.readFileSync('./data/users.json');
    const users = JSON.parse(content);   
    const user = {
        id: Date.now(),
        email,
        password,
        profil,
        validate: false,
        tokenValidation: jwt.sign({ date: Date.now() }, process.env.TOKEN_KEY) 
    };
    users.push(user);    
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    delete user.tokenValidation
    return user
}

const checkAuthentication = (email, password) => {
    const content = fs.readFileSync('./data/users.json');
    const users = JSON.parse(content);
    const result = users.find(user => (user.email === email && user.password === password))
    return result;
}

const getById = (id= "test") => {
    const content = fs.readFileSync('./data/users.json');
    const users = JSON.parse(content);
    const result = users.find(user => user.id === id)    
    return result;
}

module.exports.addUser = addUser;
module.exports.checkAuthentication = checkAuthentication;
module.exports.getById = getById;