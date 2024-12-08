const userDetails = require('../model/model')
const getalluser = async (req,res)=>{

    try {
        const user = await userDetails.find({});
        return  res.status(200).json({user});
    } catch (error) {
       return res.status(500).json({msg:error});
    }
    
}
const createuser = async (req,res)=>{
    try {
        const newuser = await userDetails.create(req.body);
        res.status(201).json({newuser})
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const updateuser = async (req,res)=>{
    try {
        const id=req.params.id;
        const updateuser = await userDetails.findOneAndUpdate({ _id: id },req.body);
        if(!updateuser)
        {
            res.status(404).json({msg:"User not found"});
        }
        res.status(200).json({msg:updateuser});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteuser =async (req,res)=>{
   try {
    const id = req.params.id;
    const del  = await userDetails.findOneAndDelete({ _id: id });
    if(!del)
    {
        res.status(404).json({
            msg:"User not found"
        });
    }
    res.status(200).json({msg:"User Deleted"});
   } catch (error) {
        res.status(500).json({msg:error});
   }
}
const getuser = async (req,res)=>{
    try {
            const id  = req.params.id;
        const getting = await userDetails.findOne({ _id: id });
        if(!getting)
        {
            res.status(404).json({msg:"user not found"});
        }
        res.status(200).json({getting});
    } catch (error) {
        res.status(500).json({error});
    }

}
module.exports={getalluser,createuser,getuser,updateuser,deleteuser};