const adminHelper = require('../helpers/adminHelper')
const adminEmail = 'admin@gmail.com'
const adminPassword ='admin'

module.exports = {
    postLogin:(req,res)=>{
        console.log(req.body)
        if(req.body.email===adminEmail && req.body.password===adminPassword)
        {
            return res.json({status:'ok'})
        }
        else
        {
            return res.json({status:'failed'})
        }
    }
}