var app = express();
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
