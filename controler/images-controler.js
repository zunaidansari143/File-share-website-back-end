import File from "../models/file.js";

export const uploadImages = async(req, res) =>{
    // console.log("hii");
    // console.log(req);

    const fileobj ={
        path:req.file.path,
        name:req.file.originalname
    }
    try{
        const file =  await File.create(fileobj)
        // console.log(file);
        res.status(200).json({path:`http://localhost:8081/file/${file._id}`})


    } catch(arr){
        console.log("somthing went wrong ", arr.message);
    }
    // return res.status(200).json({message:'Hello'})

}
export const downloadImages = async (req, res) =>{
    try{
       const file =await  File.findById(req.params.fileId);
       file.downloadContent++;
       await file.save();

       res.download(file.path,file.name)
    }catch(arr){
        console.log("somthing went wrong ", arr.message);
    }

}