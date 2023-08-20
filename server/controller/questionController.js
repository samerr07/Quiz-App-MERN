const model = require("./../model/question")
const Questions = model.Questions

exports.getQuestions = async(req,res)=>{
    // res.send("Get Questions")
    try{
        const ques = await Questions.find()
        return res.status(200).send({
            success:true,
            message:"Fetched Successfully !!!",
            ques
        })
    }catch(err){
        console.log(err);
        return res.status(401).send({
            message:"Question not found !!!",
            err
        })
    }
} 

exports.createQuestion = async(req,res)=>{
    const ques = new Questions(req.body)
    try{
        await ques.save();
        return res.status(201).send({

            message:"Question created successfully !!!",
            ques
        })   
    }catch(err){
        console.log(err)
        return res.status(401).send({
            message:"Question not created !!!",
            err
        })
    }
}

exports.deleteQuestion = async(req,res)=>{
    try{
        await Questions.deleteMany();
        return res.status(200).send({
            message:"Question deleted successfully !!!",
        })
    }catch(err){
        console.log(err)
        return res.status(401).send({
            message:"Question not deleted !!!",
            err
        })
    }
}