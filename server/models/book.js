const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const BookSchema = new Schema({

	title:String,
	short_desc:String,
	full_desc:String,
	price:Number,
	img:String

});



const BookModel = mongoose.model('Book', BookSchema);

module.exports  = BookModel;


module.exports.createBook = (newBook, callback) => {

	newBook.save(callback);
}

module.exports.getBookById = (id, callback) => {

	BookModel.findById(id, callback);
}

module.exports.getBookBySlug = (slug, callback) => {

	BookModel.findOne(slug , callback);
}

module.exports.getBooks = (callback) => {
	//    BookModel.deleteMany(callback);
	BookModel.find(callback);
}

module.exports.updateBook = (query, update, options, callback) => {

	BookModel.findOneAndUpdate(query, update, options, callback);
}


module.exports.deleteAllBook = (callback) => {

	BookModel.deleteMany(callback);
}


module.exports.getBookByType = (type, callback) => {

	/*
	@params {id, slug , status and etc.}
	 */

	BookModel.find(type , callback);
}