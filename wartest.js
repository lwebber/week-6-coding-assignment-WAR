var expect = chai.expect;

describe('newDeck',function(){
    describe('#newDeck',function(){
        it('should output an array of 52 cards in order',function(){
            var x = newDeck([])
            expect(x).to.equal('an array of 52 cards in order cards')
        });
        it('Should throw an error if there are not 52 values in the array',function(){
            expect(function(){
                newDeck([]);           
            });to.throw(Error);
        }
    );
});
describe('shuffle',function(){
    describe('#shuffle',function(){
        it('should return an array with 52 random values ',function(){
            var x = shuffle([])
            expect(x).to.equal('an array of 52 cards')
        });
        it('Should throw an error if there are not 52 random in the array',function(){
            expect(function(){
                shuffle();           
            });to.throw(Error);
        }
    );
});
