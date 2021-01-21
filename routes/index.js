const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.end('Nothing here you bleb :)');
});

router.get('/get-random', function(req, res, next) {
	const listString = req.query.list;
	if (listString) {
		const list = listString.split(',');
		res.end(list[Math.floor(Math.random() * list.length)]);
	}
	else {
		res.end('warmly');
	}
})

module.exports = router;
