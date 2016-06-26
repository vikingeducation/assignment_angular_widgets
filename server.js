/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var RESTAURANTS_FILE = path.join(__dirname, 'restaurants.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest restaurants.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/restaurants', function(req, res) {
  fs.readFile(RESTAURANTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/restaurants', function(req, res) {
  fs.readFile(RESTAURANTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var restaurants = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newRestaurant = {
      id: Date.now(),
      name: req.body.name,
      foodType: req.body.foodType,
      imageUrl: req.body.imageUrl
    };
    restaurants.push(newRestaurant);
    fs.writeFile(RESTAURANTS_FILE, JSON.stringify(restaurants, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(restaurants);
    });
  });
});

app.delete('/api/restaurants', function(req, res) {
  fs.readFile(RESTAURANTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var restaurants = JSON.parse(data);
    var deletedRestaurantId = parseInt(req.body.id);

    restaurants = restaurants.filter(function(restaurant){
      return restaurant.id !== deletedRestaurantId;
    });

    fs.writeFile(RESTAURANTS_FILE, JSON.stringify(restaurants, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(restaurants);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
