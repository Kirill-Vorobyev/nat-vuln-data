const routeValidator = require('./routeValidator');

describe('validateGet',() => {
    it('should check from < to',()=>{
        expect(routeValidator.validateGet('0','1',0,1)).toBe(true);
        expect(routeValidator.validateGet('1','0',1,0)).toBe(false);
    });
    it('should check from >= 0',()=>{
        expect(routeValidator.validateGet('0','1',0,1)).toBe(true);
        expect(routeValidator.validateGet('-1','1',-1,1)).toBe(false);
    })
    it('should check string == parsed',()=>{
        expect(routeValidator.validateGet('0','1',0,1)).toBe(true);
        expect(routeValidator.validateGet('0','1-',0,1)).toBe(false);
        expect(routeValidator.validateGet('0-','1',0,1)).toBe(false);
    })
});