const jwt = require('jsonwebtoken');

const adminAuthMiddleware = (req, res, next) => {
    try  {
        const adminToken = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
        if(decoded.role !== 'admin'){
            return res.status(403).send({ error: 'Access denied. Admins only.' });
        }
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate as admin.' });
    }
}

module.exports = adminAuthMiddleware;