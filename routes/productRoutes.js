//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApis')
//fetch all records
router.get("/fetch",productApi.products_all)
router.get("/insert",productApi.insert_product)
router.get("/update",productApi.update_product)
router.get("/delete",productApi.delete_product)
//export router
module.exports = router
