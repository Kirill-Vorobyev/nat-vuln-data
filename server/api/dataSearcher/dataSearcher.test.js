const dataSearcher = require('./dataSearcher');
const dataRetriever = require('../dataRetriever/dataRetriever');

describe('search',()=>{
    it('should return an array',()=>{
        const result1 = dataSearcher.search('.net',dataRetriever);
        const result2 = dataSearcher.search('a',dataRetriever);
        expect(typeof result1).toBe(typeof Array());
        expect(typeof result2).toBe(typeof Array());
        expect(result2).toEqual(["More than 1000 results, please narrow query"]);
    })
})