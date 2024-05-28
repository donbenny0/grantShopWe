const userSchema = require('../models/userModel')
const bcrypt = require('bcryptjs');
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
            return res.json({ 'status': 'failed', 'response': 'User already exists' });
        }

        const userData = req.body;
        const response = await userSchema.create(userData);

        // Log the successful creation of the user
        console.log(`User created successfully: ${response}`);

        res.json({ 'status': 'success', 'response': response });
    } catch (error) {
        // Log the error for debugging
        console.error('Error creating user:', error);

        res.status(500).json({ 'status': 'failed', 'response': 'Internal Server Error', 'error': error.message });
    }
};


// find user

const authenticate = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const user = await userSchema.findOne({ email });

        if (!user) {
            return res.json({ status: 'failed', response: 'No user' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({ status: 'failed', response: 'Invalid password' });
        }

        // If authentication is successful, you can return a success response or a token
        return res.json({ status: 'success', response: 'Authentication successful' });
    } catch (error) {
        console.error('Error during authentication:', error);
        res.status(500).json({ status: 'failed', response: 'Internal Server Error', error: error.message });
    }
};


module.exports = { createUser, test, authenticate }