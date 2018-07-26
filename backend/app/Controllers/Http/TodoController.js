'use strict'

class TodoController {

    constructor(){

    }

    index({ request }){
        return { greeting: 'Hello world in JSON' }
    }
}

module.exports = TodoController
