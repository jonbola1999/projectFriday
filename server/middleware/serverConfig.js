const { json } = require('body-parser')
const express = require('express')

function config (app){
  app.use(express.json()),
  app.use(express.urlencoded({extended:true}))
}

module.exports=config