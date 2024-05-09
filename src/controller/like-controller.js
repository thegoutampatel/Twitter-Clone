import LikeService from "../service/like-service.js";
const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const data = req.body;
    const response = await likeService.toggleLike(
      data.modelId,
      data.modelType,
      data.user
    );
    return res.status(201).json({
        success: true,
        message: "Successfully toggled a Like",
        data: response,
        err: null 
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while toggled a Like",
      data: {},
      err: error,
    });
  }
};
