const express = require('express')
const {Addapp,getAllapps,getmyappbypatient,getmyappbyDoctor,changeappstatus,DeleateApp}= require('../CONTROLLERS/Appointementcontroller')
const {AuthMiddleWare}=require('../Midlewares/AuthMiddleWare')

const router = express.Router()

router.post('/',AuthMiddleWare ,Addapp)
router.get('/allmyappointements',AuthMiddleWare, getAllapps)
router.get('/allmyappointementsbyPtient',AuthMiddleWare, getmyappbypatient )

router.get('/allmyappointementsbyDoctor',AuthMiddleWare,getmyappbyDoctor )
router.put('/:id',AuthMiddleWare,changeappstatus )
router.delete('/:id',AuthMiddleWare,DeleateApp  )
module.exports = router