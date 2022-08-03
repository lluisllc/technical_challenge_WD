const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Phone = require('../models/Phone.model');

//  GET /api/projects -  Retrieves all of the projects
router.get('/', (req, res, next) => {
	Phone.find().then((allPhones) => res.json(allPhones)).catch((err) => res.json(err));

});

//  GET /api/projects/:projectId -  Retrieves a specific project by id
router.get('/:phoneId', (req, res, next) => {
	const { phoneId } = req.params;

	// Each Subject document has `sections` array holding `_id`s of resources documents
	// We use .populate() method to get swap the `_id`s for the actual sections documents
	Phone.findById(phoneId)
		.then((phone) => {
			res.status(200).json(phone)
		})
		.catch((error) => res.json(error));
});

module.exports = router;