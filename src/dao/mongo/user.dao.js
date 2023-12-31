import userModel from "./models/user.model.js";

export default class CartDao {
    constructor(){}

    async getAll(){
        try{
            const users = await userModel.find();
            return users;
        }catch(error){
            console.log(error)
        }
    }

    async save(newElement){
        try{
            const response = await userModel.create (newElement);
            return response;
        }catch(error){
            console.log(error)
        }
    }
}