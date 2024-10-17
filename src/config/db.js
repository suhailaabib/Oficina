
import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose
        .connect(`${process.env.URI}`)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error));
};

export default connectDB;