const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

let checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Token expired or invalid",
            error: error
        });
    };
};

module.exports = {
    checkAuth: checkAuth
}