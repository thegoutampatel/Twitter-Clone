import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    tweets: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    name: {
        type: String
    }
});

// Middleware to hash the password before saving
userSchema.pre('save', async function(next) {
    try {
        const user = this;
        // Check if password is modified or new
        if (!user.isModified('password')) {
            return next();
        }
        // Generate salt
        const salt = await bcrypt.genSalt(9);
        // Hash the password with the generated salt
        const encryptedPassword = await bcrypt.hash(user.password, salt);
        // Update the password with the hashed one
        user.password = encryptedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = function compare(password) {
    const user = this;
    try {
        return bcrypt.compareSync(password, user.password);
    } catch (error) {
        // Handle error
        console.error("Error comparing passwords:", error);
        return false; // Return false in case of error
    }
};


userSchema.methods.genJWT = function generate() {
    const user = this;
    try {
        return jwt.sign({
            id:this._id,
            email: this.email,
        },'twitter_secret',{
            expiresIn: '2h'
        })
    } catch (error) {
        console.error("Error while Generate JWT:", error);
        return false;
    }
};

const User = mongoose.model('User', userSchema);

export default User;
