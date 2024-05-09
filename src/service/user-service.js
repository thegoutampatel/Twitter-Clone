
import { compareSync } from "bcrypt";
import UserRepository from "../repository/user-repository.js"


class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

    async signUp(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Error while SignUp", error);  
            throw error;
        }
    }

    async signIn(data){
      try {
          const email = data.email;
          const currentPassword = data.password;
          const user = await this.userRepository.findBy({email:email});
          console.log(user)
          if(!user){
            throw {
              message: "No User Found!"
            }
          }
          if(!user.comparePassword(currentPassword)){
            throw{
              message: "Incorrect Password"
            }
          }
          console.log("User Successfully Signed in");
          const token = user.genJWT();
          return token;
      } catch (error) {
          console.log("Error while SignUp", error);  
          throw error;
      }
  }
}
export default UserService;
 