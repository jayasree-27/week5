import Restaurant ,{IRestaurant} from "../models/restaurant.model";

const createResService =async(name :string, location:string, rating:number) =>{
    return await Restaurant.create({ name, location, rating });
}

const getAllResService =async()=>{
    return await Restaurant.find();
}

const getResByIdService = async (id: string) => {
    return await Restaurant.findById(id);
};

const updateResService = async (id: string, data: Partial<IRestaurant>) => {
    return await Restaurant.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};


const deleteResService = async (id: string) => {
    return await Restaurant.findByIdAndDelete(id);
};

export default{
    createResService,
    getAllResService,
    getResByIdService,
    updateResService,
    deleteResService
}

  