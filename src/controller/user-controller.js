import UserService from "../service/user-service.js";
const userService = new UserService(); 

export const signUp = async (req, res) => {
    try {
        const data = req.body;
        const response = await userService.signUp(data);

        return res.status(201).json({
            success: true,
            message: "Successfully SignUp",
            data: response,
            err: null 
        });
        console.log(response, "response")
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while SignUp",
            data: {},
            err: error 
        });
    }
}


export const signIn = async (req, res) => {
    try {
        const data = req.body;
        const response = await userService.signIn(data);
        console.log(data);
        return res.status(201).json({
            success: true,
            message: "Successfully SignIn",
            data: response,
            err: null 
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while Signin",
            data: {},
            err: error 
        });
    }
}
