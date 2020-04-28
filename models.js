const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

    test: {
      type: Number,
	  default: 0,
    },
	remaining: {
		type: Number,
		default: 40,
	},
	max: {
        type: Number,
        default: 0,
    },
	min: {
        type: Number,
        default: 0,
    },
	
	
	
	name: {
		type:String,
	},

    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin:{
      type: Number,
    },
	
	dob:{
		type: String,
	},
	
	year:{
		type: Number,
	},
	
	phone:{
		type: String,
	},
	
	university:{
		type: String,
	},
	
    messages: [{
        type: String,
    }]
});

module.exports = new mongoose.model('user', userschema);
