import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true,
        unique: true
    },
    wishlist: {
        type: [ 
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
         ],
    }, 
    birthDate: {
        type: Date,
        required: [true, 'Please provide birth date'],
    }
});

export default mongoose.model('User', UserSchema);