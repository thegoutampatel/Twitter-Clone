import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository {
  constructor() {
    super(Hashtag);
  }

  async bulkCreate(data) {
    try {
      let hashtags = await Hashtag.insertMany(data);
      return hashtags;
    } catch (error) {
      console.log("Error while creating hashtags" + error);
      throw error;
    }
  }

  //Get hashtag by Name
  async findByName(text) {
    try {
      let hashtag = await Hashtag.find({
        text: text,
      });
      return hashtag;
    } catch (error) {
      console.log("Error while find a hashtag" + error);
      throw error;
    }
  }

  async deleteHashTag(data) {
    try {
      let hashtag = await Hashtag.deleteOne(data);
      return hashtag;
    } catch (error) {
      console.log("Error while deleting a hashtag" + error);
      throw error;
    }
  }
}

export default HashtagRepository;

//CRUD -> Create Retrive Update Delete
