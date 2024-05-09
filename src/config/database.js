import mongoose from "mongoose";

const  connect = async () => {
    //mongo db conncetion establishment
    await mongoose.connect('mongodb+srv://goutampatel9131:Patel%40123@goutam.sfi6gbx.mongodb.net/');
}

export default connect
