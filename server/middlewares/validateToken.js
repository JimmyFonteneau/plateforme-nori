const jwt = require('jsonwebtoken');
module.exports =  (app) => 
(req,res,next) => {
    try{     
    const token = req.headers.authorization.split(" ")[1];    
    jwt.verify(token, process.env.TOKEN_KEY, (err, payload) => {       
        if (payload) {
            next();
        } else {
           res.send('error during token validation');
        }
    })
}catch(e){   
    res.send(e);
}
}
