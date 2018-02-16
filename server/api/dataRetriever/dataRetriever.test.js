const dataRetriever = require('./dataRetriever');

describe('retrieve',()=>{
    it('should return an array',()=>{
        const data = dataRetriever.retrieve(0,1);
        expect(typeof data).toBe(typeof Array());
    });
});