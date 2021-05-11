require('dotenv').config();

var db = module.exports = require('mysql').createConnection({ //
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	
});
db.connect(function (err) {
	
	if (err) {
		console.log("You're a wizard harry");
		throw err;
			 }
	
	console.log('Connected');
	});


/*






			async function asynFunction() {
	let conn;
	try{
		conn = await pool.getConnection();
		const rows = await conn.query("SELECT 1 as val");
		console.log(rows); //[ {val: 1}, meta: ... ]
		const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
		console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
	
}

catch (err) {
	throw err;
  } 
}
	*/
	
