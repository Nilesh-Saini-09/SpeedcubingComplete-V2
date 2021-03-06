const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const fetch  = require('node-fetch');

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
    res.render('timer/timerHome');
})

app.get('/timer/:id', (req, res) => {
    const  {id} = req.params;
    switch(id.toLowerCase()){
        case 'oll':
            //res.send('oll trainer') 
            res.redirect('https://olltrainer.netlify.app');
            break;
        case 'pll':
            //res.send('pll trainer') 
            res.redirect('https://plltrainer.netlify.app');
            break;
        case 'f2l':
            res.render('underConst');
            //res.render('f2lTrainer')
            break;
        case 'cubetimer':
            res.redirect('https://sccTimer.netlify.app'); 
            //res.render('cubeTimer')
            break;
        default: 
            res.render('timer/timerHome');
            //res.render('cubeTimer)
    }
})

// Quiz
app.get('/quiz', (req, res) => {
    res.redirect('https://nilesh-saini-09.github.io/RubiksCube-Quiz/');
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
    res.render('algorithms/algorithmsHome');
})

app.get('/algorithms/:id', (req, res) => {
    const {id} = req.params;
    res.render('algorithms/algorithmsIntro', {id});
})

app.get('/algorithms/:id1/:id2', async (req, res) => {
    const allPuzzles = ['2x2x2', '3x3x3', '4x4x4', '5x5x5', '6x6x6', '7x7x7'];
    const {id1, id2} = req.params;
    
    if(!allPuzzles.includes(id1.toLowerCase())){
        //res.render('error page')
        res.send('Error');
    }

    let algorithms;
    await fetch('https://scc-algs-api.herokuapp.com/algs')
        .then(response => response.json())
        .then(data => algorithms = data)
        .catch(err => console.log(err))


    switch(id2.toLowerCase()){
        case 'oll':
            res.render('algorithms/threeAlgs', {id2, algorithms})
            break;

        case 'pll':
            res.render('algorithms/threeAlgs', {id2, algorithms})
            break;

        case 'f2l': 
            res.render('algorithms/threeAlgs', {id2, algorithms})
            break;

        case 'coll':
            res.render('algorithms/threeAlgs', {id2, algorithms})
            break;
        
        case 'ell':
            res.render('algorithms/threeAlgs', {id2, algorithms})
            break;
        
        case 'ortega':
            res.render('algorithms/twoAlgs', {id2, algorithms})
            break;
        
        case 'cll':
            res.render('algorithms/twoAlgs', {id2, algorithms})
            break;

        case 'eg1':
            res.render('algorithms/twoAlgs', {id2, algorithms})
            break;
        
        case 'eg2':
            res.render('algorithms/twoAlgs', {id2, algorithms})
            break;

        case '5x5':
            res.send('5x5 algs') 
            //res.render('cubeTimer')
            break;

        default:
            res.render('algorithms/algorithmsIntro', {id: id1});
    }
    


})

// Learn
app.get('/learn', (req, res) => {
    // res.render('learn/learnHome');
    res.render('learnHome');
    
})

app.get('/learn/:id', (req, res) => {
    const {id} = req.params;
    res.render('cubeIntro', {id});
})

app.get('/learn/:id1/:id2', (req, res) => {
    const {id1, id2} = req.params;
        switch(id1) {
            case '2x2x2':
                res.render('twoCube', {id2});
                break;
            case '3x3x3':
                res.render('threeCube', {id2});
                break;
            case '4x4x4':
                res.render('fourCube', {id2});
                break;
            case '5x5x5':
                res.render('fiveCube', {id2});
                break;
            case '6x6x6':
                res.render('sixCube', {id2});
                break;
            case '7x7x7':
                res.render('sevenCube', {id2});
                break;
            default:
                res.render('cubeIntro', {id: id1});
        }
    
})

app.get('/underConst', (req, res) => {
    res.render('underConst');
})


app.listen(port, () => console.log('All Ok'));


// app.get('/learn/:id', (req, res) => {
//     const {id} = req.params;
//     res.render(`cubePages/${id}/${id}HomePage`);
    
// })

// app.get('/learn/2x2x2/:id', (req, res) => {
//     const {id} = req.params;
//     switch(id) {
//         case 'lbl':
//             res.render(`cubePages/2x2x2/lbl`);
//             break;
//         case 'ortega':
//             res.render(`cubePages/2x2x2/ortega`);
//             break;
//         case 'cll':
//             res.render(`cubePages/2x2x2/cll`);
//             break;
//         case 'eg1':
//             res.render(`cubePages/2x2x2/eg1`);
//             break;
//         case 'eg2':
//             res.render(`cubePages/2x2x2/eg2`);
//             break;
//     }
// })

// app.get('/learn/:id1/:id2', (req, res) => {
//     let {id1, id2} = req.params;
//     let puzzles = ['2x2x2', '3x3x3', '4x4x4', '5x5x5', '6x6x6', '7x7x7'];
//     let method = ['lbl', 'ortega', 'cll', 'eg1', 'eg2', 'beg', 'cfop', 'roux', 'zz', 'petrus', 'reduction', 'yau'];
    
//     if(puzzles.includes(id1) && method.includes(id2)) {
//         if(id1 === '2x2x2') {
//             switch(id2) {
//                 case 'lbl':
//                     res.render(`cubePages/${id1}/lbl`);
//                     break;
//                 case 'ortega':
//                     res.render(`cubePages/${id1}/ortega`);
//                     break;
//                 case 'cll':
//                     res.render(`cubePages/${id1}/cll`);
//                     break;
//                 case 'eg1':
//                     res.render(`cubePages/${id1}/eg1`);
//                     break;
//                 case 'eg2':
//                     res.render(`cubePages/${id1}/eg2`);
//                     break;
//             }
//         } else if(id1 === '3x3x3') {
//             switch(id2) {
//                 case 'beg':
//                     res.render(`cubePages/${id1}/beg`);
//                     break;
//                 case 'ortega':
//                     res.render(`cubePages/${id1}/cfop`);
//                     break;
//                 case 'cll':
//                     res.render(`cubePages/${id1}/roux`);
//                     break;
//                 case 'eg1':
//                     res.render(`cubePages/${id1}/zz`);
//                     break;
//                 case 'eg2':
//                     res.render(`cubePages/${id1}/petrus`);
//                     break;
//             }
//         }
//     }
// })
