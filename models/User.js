const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
            trim: true
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;
