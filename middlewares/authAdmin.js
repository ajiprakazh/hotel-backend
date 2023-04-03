const Users = require('../models/userModel');

const authAdmin = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await Users.findOne ({
            _id: req.user.id
        })
        
        if(user.role === 0 || user.role === 2)
            return res.status(400).json({msg: "Admin Resources Access Denied"})

        next();

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin;