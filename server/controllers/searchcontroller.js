const _ = require('lodash')

const {companies} = require('../company_List_Extractor/output/companies') 

module.exports.searchQuery = (req,res)=>{
    const query = req.query.q;
    if(!query)return res.status(400).send({message: "q is required"})
    const results = _.filter(companies, item=>{
        return item.toLowerCase().includes(query.toLowerCase());
    })

    res.status(200).send(JSON.stringify(results))
}
