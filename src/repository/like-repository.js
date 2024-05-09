import Like from '../models/like.js'
import CrudRepository from "./crud-repository.js";

class LikeRepositoy extends CrudRepository {
  constructor() {
    super(Like)
  }
  
  async findByUserAndLikeable(data){
    try {
        const like = await Like.findOne(data);
        return like;
    } catch (error) {
        throw error;
    }
  }

}

export default LikeRepositoy;