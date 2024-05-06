import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

const User = mongoose.model('User', userSchema);

export default User;
