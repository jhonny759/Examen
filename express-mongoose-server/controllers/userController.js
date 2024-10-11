const User = require('../models/User');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getAllUsers, createUser };
