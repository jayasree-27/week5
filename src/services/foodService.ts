import Food, {IFood} from "../models/food.model";
import Restaurant from "../models/restaurant.model";

const createFoodService =async(name: string, price: number, restaurant: string | object)=>{
    return await Food.create({ name, price, restaurant });
}

const getAllFoodsService = async () => {
    return await Food.find().populate("restaurant");
};

const getFoodByIdService = async (id: string) => {
    return await Food.findById(id).populate("restaurant");
};

const updateFoodService = async (id: string, data: Partial<IFood>) => {
    return await Food.findByIdAndUpdate(id, data, { new: true, runValidators: true }).populate("restaurant");
};


const deleteFoodService = async (id: string) => {
    return await Food.findByIdAndDelete(id);
};
  
const getResByFoodService =async(foodName: string)=>{
    return await Food.find({name:{$regex:new RegExp(foodName ,"i") } })
    .populate({
        path :"restaurant",
        model : Restaurant,
        select :"name location rating"
    })
    .lean();
}


export default{
    createFoodService,
    getAllFoodsService,
    getFoodByIdService,
    updateFoodService,
    deleteFoodService,
    getResByFoodService
}