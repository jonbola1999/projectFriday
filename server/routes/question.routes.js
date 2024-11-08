const router = require ('express').Router()
const { where } = require('sequelize')
const {Question} = require('../db/models')

router.route('/:id').get(async (req,res)=>{
  const {id} = req.params
  // console.log(id);
  
  // console.log(id);
  
  const allQuest = await Question.findAll({where:{topic_id:id}})
  res.json(allQuest)
})

module.exports=router