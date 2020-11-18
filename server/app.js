var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const jsonParser = express.json();
const app = express()
const port = process.env.PORT || 80;
// cors
app.use(cors())

// items
var items = [{id: "a", task: "Develop ToDo list", filterLabel: ["all", "done"]},
    {id: "b", task: "Get a job!", filterLabel: ["all", "todo"]}];

// GET--getItems
app.get('/', (req, res) => {
    console.log('get');
    res.json(items);
})

// POST--addItem
app.post("/", jsonParser, function (req, res) {
    console.log('post:' + req.body.id);
    if (!req.body) {
        return res.sendStatus(400)
    }
    let item = {
        id: req.body.id,
        task: req.body.text,
        filterLabel: ["all", "todo"]
    }
    items = [item, ...items];
    res.json({item, result: true});
});

// PUT--toggleMarkDone-and-saveTextUpdating
app.put("/", jsonParser, function (req, res) {
    console.log('put' + req.body.filterLabel);
    if (!req.body) {
        return res.sendStatus(400)
    }
    // PUT--toggleMarkDone
    if (req.body.filterLabel) {

        let filterLabel = req.body.filterLabel;
        filterLabel === "todo" ? filterLabel = "done" : filterLabel = "todo"
        items = items.map(i => {
            if (i.id === req.body.id) {
                return {...i, filterLabel: ["all", filterLabel]}
            }
            return i
        })
        return res.json({
            id: req.body.id,
            filterLabel: filterLabel,
            result: true
        });
        // PUT--saveTextUpdating
    } else if (req.body.text) {

        items = items.map(i => {
            if (i.id === req.body.id) {
                return {...i, task: req.body.text}
            }
            return i
        })
        return res.json({
            id: req.body.id,
            text: req.body.text,
            result: true
        });
    }
});

// DELETE--deleteItem
app.delete("/", jsonParser, function (req, res) {
    console.log('delete' + req.body.id);
    if (!req.body) {
        return res.sendStatus(400)
    }
    let id = req.body.id;
    items = items.filter(p => p.id !== id)
    res.json({id, result: true});
});

app.listen(port, () => {
    console.log(`Run at localhost:${port}`)
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
