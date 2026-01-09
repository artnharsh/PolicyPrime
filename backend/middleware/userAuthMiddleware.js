const jwt = require('jsonwebtoken');

const userAuthMiddleware = (req, res, next) => {
    try{
        const userToken = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

module.exports = userAuthMiddleware;