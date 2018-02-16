const express = require('express');
const path = require('path');
const router = express.Router();
const routeValidator = require('./routeValidator/routeValidator');
const dataRetriever = require('./dataRetriever/dataRetriever');
const dataSearcher = require('./dataSearcher/dataSearcher');

//handle links in the shape '/api/get/:from/:to'
router.get('/get/:from/:to',(req,res)=>{
    const reqFrom = req.params.from;//:from
    const reqTo = req.params.to;//:to
    const absParsedFrom = Math.abs(Number(reqFrom));//parsed :from
    const absParsedTo = Math.abs(Number(reqTo));//parsed :to

    //validates that the request is a set of integers
    //retrieves data or re-routes to react front-end
    routeValidator.validateGet(reqFrom,reqTo,absParsedFrom,absParsedTo) ? 
        res.json(dataRetriever.retrieve(absParsedFrom,absParsedTo)) : 
        res.sendFile(path.join(__dirname.slice(0,-11)+'\\client\\build\\index.html'));
});

router.get('/search/:query',(req,res)=>{
    const queryString = req.params.query;
    //console.log(queryString);
    res.json(dataSearcher.search(queryString,dataRetriever));
});

router.get('/info/max',(req,res)=>{
    res.json(dataRetriever.max());
});

module.exports = router;