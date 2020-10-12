// Dateien ausserhalb Datenbank

var express = require('express');
var router = express.Router();
var pool = require ('./maria.js');
var debug = require('debug')('mserver:router');
var sprintf = require('sprintf-js').sprintf;
var path = require ('path');
var fs = require ('fs');

//const basepath = "/files";

//const create_path = ((ma, vz) => {
//    fs.mkdir ( basepath + "/" + ma + "/" + vz + "/" );
//});

//===========   Mtarbeiter ========================================================== 
// liste aller Mitarbeiter holen
router.get ( '/api/get/ma' , (req, res) => {

	const conn_str = "SELECT * FROM t_mitarbeiter";

	//pool.query ( conn_str, (error, results, fields) => {
	//	console.log ( results);
	//	res.json ( results);
	//});
	pool.query ( conn_str )
		.then(rows => {
			console.log ( rows[0] );
			console.log ( rows[1] );
			console.log ( rows[2] );
			console.log ( rows.length );
			res.json(rows);
	})
		.catch ( err => {
		res.json ( 'schlecht' );
	})
});

//============================================================
// verzeichnisinhalt holen

router.get ( '/api/get/dir',  async ( req, res ) => {
	console.log ('start');
	console.log ( req.query );
	let conn;
	let ma = req.query.ma;
	let table = req.query.dir;
	var zeilen = [];
	var anz;

	try {
		conn = await pool.getConnection();
		let qry = sprintf("SELECT * FROM %s WHERE idperson = %s", table, ma );

		conn
		.query(qry)
		.then (rows => {
			console.log ( "nach qry !")
			console.log (rows);

			res.json ( rows) ;
		})
	}
	catch (err) {
		console.log (err);
	}
	finally {
		console.log ("finally");
		if ( conn )
			conn.release();
	}
});

// Datei rein 
// insert  INSERT INTO
// insert  INSERT INTO
router.post('/api/post/file', async (req, res) => {
	
	console.log ( "start" );
	let conn;
	let avatar = req.files.avatar;

    try {
		console.log ("/upload2");

		// === verzeichnis erzeugen =====

		let verzeichnis = './uploads/' + req.body.maid + '/' + req.body.dir;
		console.log ( verzeichnis );

		fs.mkdir ( verzeichnis, {recursive: true}, (err) => {
			if (err) {
				console.log (err);
				throw err;
			}
		});

		avatar.mv( verzeichnis + '/' + avatar.name);

		conn = await pool.getConnection();

		let table  = req.body.dir;
		let values = [req.body.maid, avatar.name, avatar.size, avatar.mimetype ];

		console.log(req.body.maid);
		console.log(req.body.dir);
		console.log(avatar.name);


		// in die Datenbank 
		let qry1 = sprintf ("INSERT INTO %s ( idperson , dateiname, size, mime) VALUES (?,?,?,? )", table );
		//let qry2 = sprintf ("INSERT INTO %s_data ( id, data ) VALUES ( ?, ?)", table );	
		// console.log ( qry1 );

		let rows = await conn.query(qry1, values);
		//console.log ( rows );
		
		//rows = await conn.query( qry2, [ rows.insertId, avatar.data]);
		//console.log ( rows );

		// muss raus
	    
	} catch ( err ) {
		throw err;
	}
	finally {
		if ( conn )
			conn.release();
        res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
        });
	}	
})


// ---- file download ------------------------------------------------------------
router.get( '/api/get/file', (req,res) => {

	console.log ( '/api/get/file' );

	let ma =  req.query.ma;
	let table = req.query.dir;
	let filename = req.query.file;

	let verzeichnis = './uploads/' + ma + '/' + table + '/' + filename;
	console.log (verzeichnis);

	let qry = sprintf ("SELECT * FROM %s WHERE idperson=%s AND dateiname=\'%s\'", table, ma,filename );
	console.log (qry);


	res.download ('http://localhost:3333/test.odt');
	//res.redirect ('http://localhost:3333/test.odt');
	//pool.query (qry)
	//.then (rows => {
	//	let info = rows[0];
	//	console.log ( info.id );

	//	qry = sprintf ("SELECT * FROM %s_data WHERE id=%s", table, info.id );
	//	pool.query (qry)
	//	.then ( rows => {
	//		console.log ( rows );
	//		res.download ( rows[0].data );
	//	})
	//})
	//.catch (err => {
	//	console.log(err);
	//})
	
	//let ma =	//let table = 
});

module.exports = router;
