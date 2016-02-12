/*
 * 最初のプレイヤーは「1」と数字を発言する。次のプレイヤーは直前のプレイヤーの
 * 次の数字を発言していく。ただし、
 * 3で割り切れる場合は 「Fizz」、
 * 5で割り切れる場合は 「Buzz」、
 * 両者で割り切れる場合は 「Fizz Buzz」
 * を数の代わりに発言しなければならない。
 * 
 * 例）1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,...
 * 
 * wikipediaより
 * https://ja.wikipedia.org/wiki/Fizz_Buzz
 */

var assert = require('power-assert');

var mainLogic = {
    num: 0,
    fizz: function(num) {
        return (num % 3 === 0) ? 'Fizz ' : '';
    },
    buzz: function(num) {
        return (num % 5 === 0) ? 'Buzz' : '';
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
            assert(mainLogic.run() === 'Fizz');
            assert(mainLogic.run() === '4');
            assert(mainLogic.run() === 'Buzz');
            assert(mainLogic.run() === 'Fizz');
            assert(mainLogic.run() === '7');
            assert(mainLogic.run() === '8');
            assert(mainLogic.run() === 'Fizz');
            assert(mainLogic.run() === 'Buzz');
            assert(mainLogic.run() === '11');
            assert(mainLogic.run() === 'Fizz');
            assert(mainLogic.run() === '13');
            assert(mainLogic.run() === '14');
            assert(mainLogic.run() === 'Fizz Buzz');
        });
    });
});
