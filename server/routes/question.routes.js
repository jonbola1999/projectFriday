const router = require ('express').Router()
const {Questions} = require('../db/models')

router.route('/').get(async (req,res)=>{
  const allQuest = await Questions.findAll()
  res.json(allQuest)
})

module.exports=router