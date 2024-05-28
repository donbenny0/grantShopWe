const userSchema = require('../models/userModel')

//for  api test

const test = async (req, res) => {
    try {
        res.status(500).json({ 'status': 'hello' });

    } catch (error) {
        res.status(500).json({ 'status': 'failed', 'response': error });
    }
};


// -------------------------------------------------------------------
// 

// create user
const createUser = async (req, res) => {
    try {
        const { email } = req.body;

        // Log incoming email for debugging
        console.log(`Received email: ${email}`);

        const isUserExists = await userSchema.findOne({ email });

        // Log the result of the user existence check
        console.log(`User exists: ${isUserExists}`);

        if (isUserExists) {
            return res.status(100).json({ 'status': 'failed', 'response': 'User already exists' });
        } 

        const userData = req.body;
        const response = await userSchema.create(userData);

        // Log the successful creation of the user
        console.log(`User created successfully: ${response}`);

        res.status(201).json({ 'status': 'success', 'response': response });
    } catch (error) {
        // Log the error for debugging
        console.error('Error creating user:', error);

        res.status(500).json({ 'status': 'failed', 'response': 'Internal Server Error', 'error': error.message });
    }
};



module.exports = { createUser, test }