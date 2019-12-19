const flatFun = require('./../flat');
const  expect = require('chai').expect;
const {performance} = require('perf_hooks');

describe('Test Array if', () => {
    let totalArrays = 1000; 
    let arrayOfNestedData = []
    before(() => {
        while (totalArrays > 0) {
            arrayOfNestedData.push(flatFun.createsNestedArray());      
            totalArrays--;      
        }
    })

    it('pass theorem test using lazyFlatArray()', () => {
        expect(flatFun.lazyFlatArray([[1,2,[3]],4])).to.eql([1, 2, 3, 4]);
    });

    it('pass theorem test using fastFlatArray()', () => {
        expect(flatFun.fasterFlatArray([[1,2,[3]],4])).to.eql([1, 2, 3, 4]);
    });

    it('lazyFlatArray() pass over '  + totalArrays + ' tests', () => {
        for (let i = 0; i < arrayOfNestedData.length; i++) {
            expect(flatFun.lazyFlatArray(arrayOfNestedData[i])).to.eql(arrayOfNestedData[i].flat());
        }
    })

    it('lazyFlatArray() pass over '  + totalArrays + ' tests', () => {
        for (let i = 0; i < arrayOfNestedData.length; i++) {
            expect(flatFun.fasterFlatArray(arrayOfNestedData[i])).to.eql(arrayOfNestedData[i].flat());
        }
    })


    it('fasterFlatArray() is faster than lazyFlatArray() method', () => {
        let start = performance.now();
        for (let i = 0; i < arrayOfNestedData.length; i++) {
            expect(flatFun.lazyFlatArray(arrayOfNestedData[i])).to.eql(arrayOfNestedData[i].flat());
        }
        let lazyTiming = performance.now() - start;

        start = performance.now();
        for (let i = 0; i < arrayOfNestedData.length; i++) {
            expect(flatFun.fasterFlatArray(arrayOfNestedData[i])).to.eql(arrayOfNestedData[i].flat());
        }
        let fastTiming = performance.now() - start;
        expect(fastTiming).to.be.lessThan(lazyTiming)
        
    })
})