import mongoose from "mongoose";


const connection = {}

export const connectToDb = async () => {

    if (connection.isConnected) {
        console.log('already connected');
        return;

    } else {

        try {
            const db = mongoose.connect(process.env.MONGO);
            connection.isConnected = db.connections[0].readyState;
            // console.log("=========isConnected?", connection.isConnected);
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }

    }

}
