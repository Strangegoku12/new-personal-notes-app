const jwt = require('jsonwebtoken');
const JWT_SECRET = 'anany';

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // store user info in req.user
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}


function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'user') {
        return next();
    }
    return res.status(403).json({ message: "Forbidden: Admin access required" });
}

module.exports = verifyToken;
module.exports.isAdmin = isAdmin;
