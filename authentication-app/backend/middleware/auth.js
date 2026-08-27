const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

function auth(req, res, next) {

    // Get token from request header
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            message: "Access Denied. No Token Provided."
        });
    }

    try {

        // Verify JWT Token
        const decoded = jwt.verify(token, SECRET_KEY);

        // Store user data in request
        req.user = decoded;

        // Continue to protected route
        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }
}

module.exports = auth;