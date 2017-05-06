var CronJob = require('cron').CronJob,
    fs      = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
MongoClient = require('mongodb').MongoClient,
     assert = require('assert'),
     	phantom = require("phantom");


     require('dotenv').load();

//var job = new CronJob('* * * * * *', updateMaterials, null,true,'America/Los_Angeles');


itemCollector('http://www.homedepot.com/b/Search/N-5yc1vZbrhk/Ntk-Extended/Ntt-faucet?Ntx=mode+matchpartialmax&NCNI-5','faucet');
itemCollector('http://www.homedepot.com/b/Kitchen-Kitchen-Sinks-Drop-in-Kitchen-Sinks/N-5yc1vZcgk5','kitchen-sink');
itemCollector('http://www.homedepot.com/b/Lighting-Ceiling-Fans-Ceiling-Fans-Accessories-Ceiling-Fans/Light-Kit-Included/N-5yc1vZbvlqZ1z0tey9', 'ceiling-fans-lights');
//itemCollectorb('http://www.homedepot.com/b/Search/N-5yc1vZbb52/Ntk-Extended/Ntt-drywall?Ntx=mode+matchpartialmax&NCNI-5');
//itemCollector('http://www.homedepot.com/s/faucet?NCNI-5');
//itemViewer('http://www.homedepot.com/p/American-Standard-Chatfield-8-in-Widespread-2-Handle-Bathroom-Faucet-in-Brushed-Nickel-7413801-295/206310468');


//itemViewer('http://www.homedepot.com/s/faucet?NCNI-5');


function itemCollector(url,category){
	request(url,function(error,response,html){
		if(!error){
			var $ = cheerio.load(html);
			var products = [];
			var product;
			var modelNo;
			var modelNoCollection =[];
			var priceCollection = [];
			//var fileDump = $('body').toString();
				// fs.writeFile("./bodyFile.txt", fileDump, function(err) {
    // 				if(err) {
    //    			 return console.log(err);
   	// 			 }
    // 			console.log("The file was saved!");
				// }); 
			for(var i = 0; i < 24; i++){
				product = {};
				product.photo = $('.pod-item--'+ i+' .pod-inner .plp-pod__image a img').toString().match(/http:\/\/www\..*?.jpg/)[0];
				product.price = $('.pod-item--'+ i+' .pod-inner .price__wrapper .price').toString().replace(/.*?\s*<span class="price__format">(\$)<\/span>(.*?)<span class="price__format">(.*?)<\/span><span class="price__unit">(.*?)\D*/,'$1$2.$3$4');
				product.modelNo = modelNo = $('.pod-item--'+ i+' .pod-inner .pod-plp__model').toString().replace(/[\s\S]*&#xA0;(.*?)\s*<\/div>/,'$1');
				product.refURL = 'http://www.homedepot.com/s/'+ modelNo;
				product.description = $('.pod-item--'+ i+' .pod-inner .pod-plp__description').toString().replace(/[\s\S]*<span class="pod-plp__brand-name">(.*?)<\/span>\s*(.*)[\s\S]*/,'$1 - $2').trim();
				product.category = category;
				if(product.price!==''){
					products.push(product);
					modelNoCollection.push(modelNo);
				}
			}
			updateDatabase(products,modelNoCollection);

			//console.log(products.length,products);
		}
	});
}

function updateDatabase(products,modelNos){
			var dbLink = 'mongodb://'+'hermano360'+':'+'f00tball'+'@'+'ds137090.mlab.com:37090/meadowlark';
			MongoClient.connect(dbLink, function(err, db) {
				console.log("Successfully connected to database");
				db.collection('products').find({modelNo:{"$in": modelNos}}).toArray(function(err, docs) {
					assert.equal(err, null);
					var insertDocuments = compareModelNos(docs,products);
					insertDocuments.forEach(function(document){
						db.collection('products').replaceOne({modelNo: document.modelNo},document,{upsert:true});
					});
					console.log(insertDocuments.length+' products updated.');
					db.close();
				});	
			});
}

function compareModelNos(dbDocs,webDocs){
	var upsertDocs = [];
	var updateRequired;
	webDocs.forEach(function(webProduct){
		updateRequired = true;
		dbDocs.forEach(function(dbProduct){
			if(dbProduct.modelNo === webProduct.modelNo && dbProduct.price === webProduct.price){
				updateRequired = false;
			}
		});
		if(updateRequired){
			upsertDocs.push(webProduct);
		}
	});

	console.log(upsertDocs);
	return upsertDocs;
}

function modelNoExtractor(productDocuments){
	var modelNoCollection = [];
	productDocument.forEach(function(product){
		modelNoCollection.push(product.modelNo);
	});
	return modelNoCollection;
}


function itemCollectorb(url){
	request(url,function(error,response,html){
		if(!error){
			var $ = cheerio.load(html);
			var products = [];
			var product;
			var modelNo;
			var pageHTML = $('.pod-plp__container .pod-item--4').toString();
			for(var i = 4; i < 5; i++){
				product = {};
				// if($('.pod-item--'+ i).toString()===''){
				// 	console.log(i,'item not listed');
				// 	continue;
				// }


				product.photo = $('.pod-plp__container').toString().replace(/([\S\s]*<span class="price__format">)(\$)<\/span>(.*?)<span class="price__format">(.*?)(<\/span><span class="price__unit">)([\s\S]*)/,'$2$3.$4');//.match(/http:\/\/www\..*?.jpg/)[0];
				//console.log(product.photo);
				// product.price = $('.pod-item--'+ i+' .pod-inner .price__wrapper .price').toString().replace(/.*?\s*<span class="price__format">(\$)<\/span>(.*?)<span class="price__format">(.*?)<\/span><span class="price__unit">(.*?)\D*/,'$1$2.$3$4');
				// product.modelNo = modelNo = $('.pod-item--'+ i+' .pod-inner .pod-plp__model').toString().replace(/[\s\S]*&#xA0;(.*?)\s*<\/div>/,'$1');
				// product.refURL = 'http://www.homedepot.com/s/'+ modelNo;
				// product.description = $('.pod-item--'+ i+' .pod-inner .pod-plp__description').toString().replace(/[\s\S]*<span class="pod-plp__brand-name">(.*?)<\/span>\s*(.*)[\s\S]*/,'$1 - $2').trim();
				products.push(product);
			}
			
			//console.log(products);
		}
	});
}


function updateMaterials(){
		var url = "http://www.mutinycrossfit.com/wod";
		dateCollector(url,function(datesOnWebpage){
			var justDates = dateExtractor(datesOnWebpage);
			var dbLink = 'mongodb://'+process.env.MLAB_USER+':'+process.env.MLAB_PW+'@'+process.env.MLAB_DB;
				MongoClient.connect(dbLink, function(err, db) {
					console.log("Successfully connected to database");
					db.collection('wods').find({date:{"$in": justDates}}).toArray(function(err, docs) {
						assert.equal(err, null);
						var insertDocuments = compareDocsDates(docs,datesOnWebpage);
						if(insertDocuments.length > 0){
							db.collection('wods').insertMany(insertDocuments,function(err,res){
								assert.equal(err,null);
								console.log("DB updated with "+insertDocuments.length+" new documents");
								sendMorningText(datesOnWebpage);
								db.close();
							});
						} else {
							console.log("DB already up to date!");
							sendMorningText(datesOnWebpage);
							db.close();
						}
					});	
				});
		});

		//production, will remove this and will change it only to its scheduled time.
		job.stop();
}

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





