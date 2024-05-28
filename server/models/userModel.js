const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: false, },
    profile_image: { type: String, required: false },
    phone_number: { type: Number, required: false },
    email: { type: String, required: true, unique: true },
    orders: [{ type: Schema.Types.ObjectId, ref: 'orders' }],
    gender: { type: String, required: false },
    password: { type: String, required: true },
    date_of_birth: { type: Date, required: false },
    cart_items: [{ type: Schema.Types.ObjectId, ref: 'cart' }],
    user_type: { type: String, default: "customer" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'wishlist' }]
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model('users', userSchema);
