import Comment from '../models/comment.js'
import CrudRepository from "./crud-repository.js";

class CommentRepositoy extends CrudRepository {
  constructor() {
    super(Comment)
  }


}

export default CommentRepositoy;