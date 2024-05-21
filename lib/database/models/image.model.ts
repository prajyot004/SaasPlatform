
import { Document, model, models, Schema } from "mongoose";
import { title } from "process";


export interface IImage extends Document{
    title:String,
    transformationTypes:String,
    pubicId:String,
    secureUrl:String,
    width:Number,
    height:Number,
    config:Object,
    transformationUrl:String,
    aspectRatio:String,
    color:String,
    prompt:String,
    author:{_id:String,FirstName:string,LastName:string},
    createdAt:Date,
    updatedAt:Date

}

const ImageSchema = new Schema({
    title:{type:String,require:true},
    transformationTypes:{type:String,require:true},
    pubicId:{type:String,require:true},
    secureUrl:{type:URL,require:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId, ref:'User'},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},

})

const Image = models?.Image || model('Image',ImageSchema);

export default Image;