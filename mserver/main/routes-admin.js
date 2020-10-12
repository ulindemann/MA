//  admin routen

var express = require('express');
var adminrouter = express.Router();
var pool = require ('./maria.js');
var debug = require('debug')('mserver:router');
var sprintf = require('sprintf-js').sprintf;
var path = require ('path');

// active directory
var ActiveDirectory = require('activedirectory2');
var config = {
	url: 'ldap://192.168.1.30:389',
	baseDN: 'ou=FSD,dc=lwnet,dc=local',
	username: 'lindemann@lwnet.local',
	password: 'nnamednil'
};
var ad = new ActiveDirectory(config);

// child prozess

const { execFile } = require ('child_process');

adminrouter.post ('/post/xls', (req,res) => {

	const child = execFile ( 'C:/Program Files (x86)/Microsoft Office/Office15/excel.exe', ['C:/Bestellliste Brötchen.xlsx'], (error,stdout,stderr) => {
		if (error) {
			console.log ( error);
			res.end ( 'Fehler');
		}
	})
	res.end ( 'Alles Gut!');
});


//==  authentifizierung
adminrouter.post ('/post/login', (req, res) => {
	
	let user = req.query.user;
	let password = req.query.passwort;

	//console.log ( user + ' : ' + password);

	ad.authenticate ( user, password, (err,auth) => {
		if(err){
			console.log ('Fehler: ' + JSON.stringify(err));
			res.end('Fehler');
		}
		if ( auth) {
			res.end('Alles Gut!');
		}
		// documentation falsch, !auth gibts nicht, ==> err
		else {
			res.end( 'Ungültiger Username/Passwort');
		}
	});
});


//== alle Angestellte aus AD
adminrouter.get('/get/an', (req,res) => {

	let grp = "GL_1000_alle_AN_Lwerk";

	ad.getUsersForGroup(grp, (err, users) => {
		if (err) {
			res.end ( 'Fehler!');
		}
		if ( !users ) {
			res.end (grp + ': => Keine Mitglieder gefunden');
		}
		else {
			console.log (users.length);
			res.json ( users);
		}
	})
});

// Test, Datei ausführen ( excel)

//
adminrouter.get ('/', (req,res) => {
	console.log ('get /');
	res.end ('hello world');
});

module.exports = adminrouter;
