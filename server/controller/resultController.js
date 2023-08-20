const model = require("./../model/result")
const Result = model.Result

exports.getResult = async(req,res)=>{
    try{
        const result = await Result.find();
        return res.status(200).send({
            success:true,
            message:"Results fetched successfully !!!",
            result
        })
    }catch(err){
        console.log(err)
        return res.status(404).send({
            success:false,
            message:"Error in fetching results !!!",
            err
        })
    }
}

exports.storeResult = async(req,res)=>{
    try{
        const result = new Result(req.body);
        await result.save();
        return res.status(200).send({
            success:true,
            message:"Result stored successfully !!!",
            result
        })
    }catch(err){
        console.log(err)
        return res.status(404).send({
            success:false,
            message:"Error in storing result !!!",
            err
        })
    }
}

exports.dropResult = async(req,res)=>{
    try{
        const result = await Result.deleteMany();
        return res.status(200).send({
            success:true,
            message:"Result dropped successfully !!!",
            result
        })
    }catch(err){
        return res.status(404).send({
            success:false,
            message:"Error in dropping result !!!",
            err
        })
    }
}