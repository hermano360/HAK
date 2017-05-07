var CronJob = require('cron').CronJob,
    fs      = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
MongoClient = require('mongodb').MongoClient,
     assert = require('assert'),
     	phantom = require("phantom");


     require('dotenv').load();

//var job = new CronJob('* * * * * *', updateMaterials, null,true,'America/Los_Angeles');


//itemCollector('http://www.homedepot.com/b/Lighting-Ceiling-Fans-Ceiling-Fans-Accessories-Ceiling-Fans/Light-Kit-Included/N-5yc1vZbvlqZ1z0tey9', 'ceiling-fans-lights');


var candidates  = ['http://www.imdb.com/name/nm0000148/'];

candidates.forEach((candidate)=>{generateCandidate(candidate)});

function generateCandidate(url){
	request(url,function(error,response,html){
		if(!error){
			var $ = cheerio.load(html);
      var candidate = {};
      candidate.url = url;
			candidate.name = $('.header .itemprop').text().toString();
      candidate.writer = $('#filmography #filmo-head-writer').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.thanks = $('#filmography #filmo-head-thanks').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.director = $('#filmography #filmo-head-director').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.actor = $('#filmography #filmo-head-actor').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.producer = $('#filmography #filmo-head-producer').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.soundtrack = $('#filmography #filmo-head-soundtrack').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.self = $('#filmography #filmo-head-self').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();
      candidate.archive_footage = $('#filmography #filmo-head-archive_footage').text().toString().replace(/[\s\S]*\((\d*).*\)/,"$1").trim();

			updateDatabase(candidate);

			//console.log(products.length,products);
		}
	});
}

function updateDatabase(candidate){
			var dbLink = 'mongodb://'+'hermano360'+':'+'f00tball'+'@'+'ds137090.mlab.com:37090/meadowlark';
			MongoClient.connect(dbLink, function(err, db) {
				console.log("Successfully connected to database");
				db.collection('candidates').replaceOne({url: candidate.url},candidate,{upsert:true});
				console.log(`${candidate.name} has been updated`);
				db.close();
      });
    };



function sendMorningText(wodsOnline){
	var today = new Date();
	wodsOnline.forEach(function(wod){
		if((today - new Date(wod.date))<86400000){
			contacts().forEach(function(contact){
				twilioText.sendText(process.env.TWILIO_SID,process.env.TWILIO_AUTHTOKEN,process.env.TWILIO_FROM_NUM,contact.number,wod.crossfit);
			})
		}
	});
}


function compareDocsDates(dbWODS, webWODS){
	var insertDocuments = [];
	var insertDoc;
	webWODS.forEach(function(webWod){
		insertDoc = false;
		dbWODS.forEach(function(dbWod){
			if(dbWod.date===webWod.date){
				insertDoc = true;
			}
		});
		if(!insertDoc){
			insertDocuments.push(webWod);
		}
	});

	return insertDocuments;
}

function dateExtractor(wodArray){
	var datesArray= [];
	wodArray.forEach(function(wod){
		datesArray.push(wod.date);
	});
	return datesArray;
}

function dateCollector(url,cb) {
	var wodArray = [];
	request(url,function(error,response,html){
		if(!error){
			var $ = cheerio.load(html);
			var dbentry;
			var WODDate;
			var individualExercise;
			for(var i = 1; i <= 14; i++){
				dbentry = {};
				WODDate = "";
				individualExercise = "";

				$("li.post"+i+" div.postContent h2.postTitle a").filter(function(){
					WODDate = $(this).text().replace(/^.+\s(\d+)-(\d+)-(\d+)/,"$1-$2-$3");
					dbentry.date = WODDate;
				});

				WOD = $("li.post"+i+" div.postBody strong");
				individualExercise = WOD.toString();
        		//Run the Regex analysis to extract out the workout, removing all of the
        		//unnecessary elements
        		dbentry.crossfit =  individualExercise.replace(/(<strong>)*CROSSFIT((<\/strong>)*|(<\/span>))*/g,"").replace(/<strong>/,"").replace(/(<strong>HIT-CON.*)/g,"").replace(/(<strong>)|(<p>)/g," ").replace(/<(\/strong>)|(<\/span>)/g,":").replace(/<br>/g,",").replace(/(&#x.*?;\s*)|(<span.*?\">)|(<\/p>)/g,"").replace(/(:$)|(^[\s\.:,])|(&quot;)/g,"").replace(/(:,)|(::)/g,": ").replace(/(:\s,)/g,": ").replace(/&amp;/g,"&");
				wodArray.push(dbentry);
			}
		}
		cb(wodArray);
	});
}
