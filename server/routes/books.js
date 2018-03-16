var express = require('express');
var router = express.Router();


var Book = require('../models/book');

/* GET books listing. */
router.get('/', function(req, res, next) {

// 	Book.deleteAllBook((error , payload) => {
//
// 		if(error)
// 		return res.status(500).json({error:error})
// 		else
// 		return res.status(200).json(payload);
//
//
// })
//
// 	return;

	Book.getBooks((error , payload) => {

		if(error)
		return res.status(500).json({error:error})
		else
		return res.status(200).json({payload:payload});


})




});

router.post('/', function(req, res, next) {

		var newBook = new Book(req.body);

		Book.createBook(newBook , (error , payload) => {

			if(error)
			return res.status(500).json({error:error})
			else
			return res.status(200).json(payload);


		})

});


router.get('/:id', function(req, res, next) {


});


router.put('/:id', function(req, res, next) {


});



router.delete('/:id', function(req, res, next) {


});





function showBookError(res,error) {

	return


}







module.exports = router;
