var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit	:  10,
	host		:  'database-1.cckea77oooke.ap-northeast-2.rds.amazonaws.com',
	user		:  'dailigf',
	password	:  'tlIm$I$nw23',
	database	:  'workouts'
});


module.exports.pool = pool;
