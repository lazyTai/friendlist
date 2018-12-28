var express=require("express")
var app=express()
var path = require("path")
var history = require('connect-history-api-fallback');

app.use(express.static('./'));
const router = express.Router()
const indexRoute = router.get('/', (req, res, next) => {
    res.status(200).render("index")
})
var ejs = require('ejs');
console.log(path.join(__dirname,'./'))
app.set('views', path.join(__dirname, './'))
app.set('view engine', 'html')
app.engine('html', ejs.__express)

app.use(history({
    index: '/index.html',
    rewrites: [
        {from: /^\/[\s\S]/, to: '/'}
    ],
    verbose: true
}))
app.get('/', indexRoute)


app.listen(8080)
