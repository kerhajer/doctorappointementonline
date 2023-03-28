const User = require('../models/usermodel')
const { validationResult } =  require('express-validator')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config()
//const Appointment = require("../models/appointmentmodel");
const cloudinary=require('../cloudinary')





const Register = async(req,res)=>{
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(402).json({errors:errors.mapped() })
        }
        
    
        const {name,lastname,age,email,password,phonenumber,address,city,specialization,experience,feePerCunsultation,Role} = req.body
        

        const savedImage = await cloudinary.uploader.upload(req.files.Image.tempFilePath)
         
        // verify if the user exists 
        const isfound = await User.findOne({email})
        if(isfound){
           return res.status(401).json({message:'You have already registered!'})
        }
        // hashing of the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //save the user in the DB
        const newUser =  await User.create({name,lastname,age,email,password:hashedPassword,phonenumber,address,city,specialization,experience,feePerCunsultation,Image:{Image:{public_id:savedImage.public_id,imgUrl:savedImage.url }},Role})
        res.status(201).json({newUser,msg:'User has been created successfully'})
    
    } catch (error) {
        res.status(501).json({message:error})
    }
}
const Login = async(req,res)=>{
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(402).json({errors:errors.mapped() })
        }
        const {email, password} = req.body
        // vérifier si l'utilisateur n'a pas du compte!!
        const isfound = await User.findOne({email})
        if(!isfound){
            return res.status(403).json({message:'You have to register before !!'})
        }
        // compare the password (req.body) vs password from the DB
        const isMatch = bcrypt.compareSync(password, isfound.password)
        if(!isMatch){
            return res.status(402).json({message:'Wrong password'})
        }
        //generate a token
        const token = await jwt.sign({id:isfound._id},process.env.SECRET)
        
        res.status(200).json({token,isfound})

    } catch (error) {
        res.status(501).json({message:error})
    }

}

const getAllDoctors = async(req,res)=>{
    try {
        const users = await User.find({Role:"Doctor"})
        res.json(users)
    } catch (error) {
        res.status(501).json({message:error})

    }
}



    const getdoctorinfobyid=async (req, res) => {

    try {
        const idDocotr= req.params.idDoctor;

        const user = await User.findOne({ Role:'Doctor',_id: idDocotr });
        res.status(200).send({
          success: true,
          message: "Doctor info fetched successfully",
          data: user,
        });
      } catch (error) {
        res
          .status(500)
          .send({ message: "Error getting doctor info", success: false, error });
      }
    }





    

    const updatedoctorprofile=async (req, res) => {

        try {
          const user = await User.findByIdAndUpdate({_id:req.params.id}, { $set: { ...req.body } },{new:true});
          res.status(200).send({
            success: true,
            message: "Doctor profile updated successfully",
            data: user,
          });
        } catch (error) {
          res
            .status(500)
            .send({ message: "Error getting doctor info", success: false, error });
        }
      };









module.exports = {Register,Login,getAllDoctors,getdoctorinfobyid,updatedoctorprofile }