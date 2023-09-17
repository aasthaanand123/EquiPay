const express = require('express')
const router = express.Router()

const {searchQuery} = require('../controllers/searchcontroller')

router.get("/search",searchQuery);
module.exports = router

