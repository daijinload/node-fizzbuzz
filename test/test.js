var assert = require('power-assert');

var mainLogic = {
    num: 0,
    fizz: function(num) {
        return (num % 3 === 0) ? 'fizz ' : '';
    },
    buzz: function(num) {
        return (num % 5 === 0) ? 'buzz' : '';
    },
    others: function(num) {
        return (this.fizz(num) + this.buzz(num) === '') ? num : '';
    },
    run: function() {
        var num = this.num = (this.num + 1);
        return (this.fizz(num) + this.buzz(num) + this.others(num)).trim();
    }
};

describe('fizz buzz test!!', function(){
    describe('fizzbuzz用のロジックが実行された時', function(){
        it('各種結果は、下記のようになる。', function(){
            assert(mainLogic.run() === '1');
            assert(mainLogic.run() === '2');
            assert(mainLogic.run() === 'fizz');
            assert(mainLogic.run() === '4');
            assert(mainLogic.run() === 'buzz');
            assert(mainLogic.run() === 'fizz');
            assert(mainLogic.run() === '7');
            assert(mainLogic.run() === '8');
            assert(mainLogic.run() === 'fizz');
            assert(mainLogic.run() === 'buzz');
            assert(mainLogic.run() === '11');
            assert(mainLogic.run() === 'fizz');
            assert(mainLogic.run() === '13');
            assert(mainLogic.run() === '14');
            assert(mainLogic.run() === 'fizz buzz');
        });
    });
});
