const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const rootController = require('./routes/index');
const chap1Controller = require('./routes/chapter-1');
const chap2Controller = require('./routes/chapter-2');
const chap3Controller = require('./routes/chapter-3');
const madnessController = require('./routes/madness');

app.use('/', rootController);
app.use('/chapter-1', chap1Controller);
app.use('/chapter-2', chap2Controller);
app.use('/chapter-3', chap3Controller);
app.use('/madness', madnessController);
