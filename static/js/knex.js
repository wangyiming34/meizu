var knex = require('knex')

var db = knex({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'text'
    },
    pool:{min:0,max:19}
})

module.exports = db