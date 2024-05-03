import mongoose from "mongoose";

const  connect = async () => {
    //mongo db conncetion establishment
    await mongoose.connect('mongodb+srv://gmpatel:Papa%40777@gm.iaahbkn.mongodb.net/');
}

export default connect
