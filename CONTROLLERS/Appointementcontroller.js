const Appointement=require('../models/appointementmodel')
require('dotenv').config()
const User = require('../models/usermodel')

const Addapp = async(req,res)=>{
    try {

        const {date,time,status,DoctorId,DoctorInfo} = req.body
        console.log(DoctorInfo)


        const newAppointement = await Appointement.create({date,time,status,owner:req.userId,DoctorId,DoctorInfo})
        res.json(newAppointement)
        

    } catch (error) {
        res.status(501).json({message:error})
    }
}

const getAllapps = async(req,res)=>{
    try {
        const appointements = await Appointement.find({}).populate({path:'owner', select:'-password -__v'})
        res.json(appointements)
    } catch (error) {
        res.status(501).json({message: error })
    }
}

const getmyappbypatient =  async(req,res)=>{

 try {
        const appointementbypatient = await Appointement.find({owner:req.userId}).populate({path:'owner', select:'-password -__v'})
        res.json(appointementbypatient)
    } catch (error) {
        res.status(501).json({message: error })
    }
}

const getmyappbyDoctor=  async(req,res)=>{

    try {
           const appointementbyDoctor = await Appointement.find({DoctorId:req.userId}).populate({path:'owner', select:'-password -__v'})
           res.json(appointementbyDoctor)
       } catch (error) {
           res.status(501).json({message: error })
       }
   }

const  changeappstatus=async(req,res)=>{
        try {
            //1 find() //2 Edit() // 3 save()
            //findByIdAndUpdte 
            const updatedapp = await Appointement.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({msg:'Appointement has been updated successfully!',updatedapp})
    
        } catch (error) {
            console.log(error);
        }
    }

    const  DeleateApp=async(req,res)=>{
        try {
            
            const deletedApp = await Appointement.findByIdAndDelete(req.params.id)
            res.json({msg:'Appointement has been deleted successfully!',deletedApp})
        } catch (error) {
            console.log(error)
        }
    }




module.exports = {Addapp,getAllapps,getmyappbypatient,getmyappbyDoctor,changeappstatus,DeleateApp}