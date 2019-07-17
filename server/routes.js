const validateToken = require('./middlewares/validateToken');
const jwt = require('jsonwebtoken');
const users = require('./controllers/users');

module.exports = (app) => {

app.post('/verify',validateToken(app), (req, res) => {
    // const { token } = req.body;
    // console.log("token " + token);
    // const decoded = jwt.verify(token, 'shhhhh');
    // console.log("decoded " + decoded);
    res.send('token ok');
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;             
    const user = users.checkAuthentication(email, password);
    const jwtSign = jwt.sign({ user }, process.env.TOKEN_KEY);
    res.send(jwtSign);  
})

app.post('/register', (req, res) => {
    const { email, password } = req.body;             
    users.addUser(email, password);        
    res.send('inscription validé');  
})

app.post('/test', (req, res) => {    
    res.send('welcom to test route');
})
};
