//to set up path to resolve request

//1) import express.
 const express = require('express')

 //import controller
 const userController = require('../controllers/userController')

 //import project controller
 const projectsController = require('../controllers/projectsController')

 //import jwtMiddleware
 const jwtMiddleware = require('../Middleware/jwtMiddleware')

 //import multer
 const multerConfig = require('../Middleware/multerMiddleware')
const jwtMiddleWare = require('../Middleware/jwtMiddleware')

 //2) create an object for Router() class in the express modules
 const router = new express.Router()

 //3) path to resolve the request
     //syntax = router.httpreq('path',()=>{how to solve})
      //a) register
        router.post('/user/register',userController.register)

      //b)login
      router.post('/user/login',userController.login)  

      //c) add project
      router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectsController.addProject)

      //d) home project
      router.get('/project/home-project',projectsController.gethomeProject) 
      //e) all project
      router.get('/project/all-project',jwtMiddleWare,projectsController.getallProject) 
      //f) userProject
      router.get('/user/allproject',jwtMiddleWare,projectsController.getUserProject) 

      //g) editProject

       router.put('/project/edit/:id',jwtMiddleWare,multerConfig.single('projectImage'),projectsController.editUserProject) 

     //i) deleteProject
    
     router.delete('/project/remove/:id',jwtMiddleWare,projectsController.deleteUserProject) 


 //4) export router
 module.exports = router