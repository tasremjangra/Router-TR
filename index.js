const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
 var jsonParser = bodyParser.json()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range');
    res.header('Access-Control-Max-Age', 1728000);
   	res.header('Content-Type', 'text/plain; charset=utf-8');
    res.header('Content-Length', 0);
      
    if ('OPTIONS' == req.method) {
     	res.send(200);
    }
    else {
    	next();
  	}
	};

  app.use(allowCrossDomain);  
  app.disable('etag');


app.get('/home', (req, res) => res.send('I am in expressjs Tarsem'))
app.post('/about', (req, res) => res.send('I am in expressjs Jangra'))

app.post('/test', function(req, res) {
	console.log('i am in about us ');
	var images = ["https://image.shutterstock.com/image-photo/headphones-isolated-on-white-background-260nw-377641141.jpg",
		"http://lghttp.50157.nexcesscdn.net/8028284/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/u/audition_1.png",
		"http://pngimg.com/uploads/headphones/headphones_PNG7631.png","https://rukminim1.flixcart.com/image/312/312/j6gs6fk0/headphone/z/d/h/apple-beats-solo3-original-imaewxpd7eqgqqvq.jpeg?q=70",
		"https://images-na.ssl-images-amazon.com/images/I/71mikblvpdL._SY355_.jpg"];
		res.send(images)
})

app.listen(9000, function (){
	console.log("Example app listening");
})