const express = require('express');
const bodyParser = require('body-parser');  
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const user = [{"login": "tata", "id": 1},{"login": "tutu", "id": 2}]

app.use(function(req,res,next){
    try{
    console.log("middleware token");
    console.log(req.headers);
    // const token = req.headers.authorization.split(" ")[1]
    // jwt.verify(token, key.tokenKey, function (err, payload) {
    //     console.log(payload)
    //     if (payload) {
    //         user.findById(payload.userId).then(
    //             (doc)=>{
    //                 req.user=doc;
    //                 next()
    //             }
    //         )
    //     } else {
    //        next()
    //     }
    // })
}catch(e){
    next()
}
})

app.post('/verify',(req,res) => {    
    const { token } = req.body;
    console.log("token "+ token);    
    const decoded = jwt.verify(token, 'shhhhh');
    console.log("decoded "+ decoded);
    res.send(decoded);
})

app.post('/register',(req,res) => {    
    const { login, mdp } = req.body;
    console.log("login "+ login);
    console.log("mdp "+ mdp);
    const token = jwt.sign({ id: 3 }, 'shhhhh');
    res.send(token);
})

app.listen(1234);