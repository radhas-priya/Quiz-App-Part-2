const Questions = require("../models/questionSchema");
const Result = require("../models/resultSchema");
const { questions, answers } = require('../database/data');







 //get all questions
 async function getQuestion(req,res){
   try{
       const q = await Questions.find();
       res.json(q);

   }catch(error){
      res.json({error});

   }
}

// insert  a question
async function insertQuestion(req, res) {
    try {
        await Questions.insertMany({ questions: questions, answers:answers});
        res.json({ msg: "Data saved successfully!" });
    } catch (error) {
        res.json({ error });
    }
}

//delete question
async function deleteQuestion(req,res){
    try{
       await Questions.deleteMany();
       res.json({msg:"Questions deleted succesfully"});
    }
    catch(error){
        res.json({error})
    }
}
// .........................

//get all result
async function getResult(req,res)
{
    try{
        const r  = await Result.find();
        res.json(r);
    }catch(error){
        res.json({error})
    }
}

//post all result 
async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
            throw new Error("Username and result data are required.");
        }
        await Result.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

async function deleteResult(req,res){
   try{
     await Result.deleteMany();
     res.json({msg: "result deleted successfully"});
   }catch(error){
    res.json({error})
   }
}






module.exports = {
    getQuestion,
    insertQuestion,
    deleteQuestion,
    getResult,
    storeResult,
    deleteResult
  };