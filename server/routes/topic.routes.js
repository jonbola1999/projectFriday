const router = require('express').Router()
const {Topic} = require('../db/models')

router.route('/').get(async(req,res)=>{
  try {
    const allTopic = await Topic.findAll()
    res.json(allTopic)
  } catch (error) {
    res.json({message:error.message})
  }
})


module.exports=router