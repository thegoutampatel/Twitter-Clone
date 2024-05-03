import mongoose from "mongoose";

const  connect = async () => {
    await mongoose.connect('mongodb+srv://gmpatel:Papa%40777@gm.iaahbkn.mongodb.net/');
}

export default connect
