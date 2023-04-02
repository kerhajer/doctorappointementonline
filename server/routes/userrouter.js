const express=require('express')
const router = express.Router() 
const Usercontroller=require('../CONTROLLERS/Usercontroller')

const {Datavalidation}=require('../Midlewares/Datavalidation')
const {AuthMiddleWare}=require('../Midlewares/AuthMiddleWare')

router.post('/Register',Datavalidation, Usercontroller.Register ) 


router.post('/Login',Usercontroller.Login)
router.get('/' ,Usercontroller.getAllDoctors )
router.get('/Doctorprofile/:idDoctor', Usercontroller.getdoctorinfobyid)
router.put('/:id',Datavalidation,Usercontroller.updatedoctorprofile )




module.exports=router