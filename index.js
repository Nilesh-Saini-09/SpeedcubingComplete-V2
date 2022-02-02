const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
const port = process.env.PORT || 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
})

// Timer Home Page (cube, oll, pll, f2l)
app.get('/timer', (req, res) => {
    //res.render('timer');
    res.send('Timer home Page')
})

app.get('/timer/:id', (req, res) => {
    const  {id} = req.params;
    switch(id.toLocaleLowerCase()){
        case 'oll':
            res.send('oll trainer') 
            //res.render('ollTrainer')
            break;
        case 'pll':
            res.send('pll trainer') 
            //res.render('pllTrainer')
            break;
        case 'f2l':
            res.send('f2l trainer') 
            //res.render('f2lTrainer')
            break;
        case 'cubetimer':
            res.send('cube timer') 
            //res.render('cubeTimer')
            break;
        default: 
            res.send('cube Timer')
            //res.render('cubeTimer)
    }
})

// Quiz
app.get('/quiz', (req, res) => {
    //res.render('quiz');
    res.send('Quiz');
})

// Blogs
app.get('/blogs', (req, res) => {
    res.redirect('https://speedcubingcomplete.blogspot.com/')
})

// More
app.get('/more', (req, res) => {
    res.send('More Page');
    //res.render('more')
})

// Algorithms
app.get('/algorithms', (req, res) => {
    //res.render('algorithms');
    res.send('algorithms home page')
})

app.get('/algorithms/:id', (req, res) => {
    const {id} = req.params;
    switch(id.toLocaleLowerCase()){
        case '3x3':
            res.send('3x3 algs') 
            //res.render('ollTrainer')
            break;
        case '2x2':
            res.send('2x2 algs') 
            //res.render('pllTrainer')
            break;
        case '4x4':
            res.send('4x4 algs') 
            //res.render('f2lTrainer')
            break;
        case '5x5':
            res.send('5x5 algs') 
            //res.render('cubeTimer')
            break;
        // default: 
        //     res.send('3x3 algs')
            //res.render('cubeTimer)
    }
})

app.get('/algorithms/:id1/:id2', (req, res) => {
    const allPuzzles = ['2x2', '3x3', '4x4', '5x5', '6x6', '7x7'];
    const {id1, id2} = req.params;
    if(!allPuzzles.includes(id1.toLocaleLowerCase())){
        //res.render('error page')
        res.send('Error');
    }

    switch(id2.toLocaleLowerCase()){
        case 'oll':
            res.send('oll') 
            //res.render('')
            break;
        case 'pll':
            res.send('pll') 
            //res.render('pllTrainer')
            break;
        case 'f2l':
            res.send('') 
            //res.render('f2lTrainer')
            break;
        case '5x5':
            res.send('5x5 algs') 
            //res.render('cubeTimer')
            break;
        // default: 
        //     res.send('3x3 algs')
            //res.render('cubeTimer)
    }
    


})

// Learn

app.get('/learn', (req, res) => {
    res.send('Learn Page')
    // res.render('learn')
})

app.get('/learn/:id', (req, res) => {
    const {id} = req.params;
    
})

app.listen(port, () => console.log('All Ok'));
