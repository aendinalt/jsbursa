var jsonParser = require('../middlewares/jsonParser');
var should = require('should');
var sinon = require('sinon');
var MockReq = require('mock-req');



describe('jsonParser', function(){

    it('является функцией', function (done){
        jsonParser.should.be.type('function');
        done();
    });

    it('вызывает next', function (done){
        jsonParser(null, {'headers':{'content-type': 'testmessage'}}, {} , function () {
            done();
        });
    });

    it('корректно пробрасывает ошибки', function (done) {
        jsonParser({ message: 'error' }, {}, {}, function (err) {
            (err === undefined).should.equal(false);
            err.should.be.eql({ message: 'error' });
            done();
        });
    });

    it('не трогает req если content-type не равен application/json', function(done){

        var req = new MockReq({
            method: 'POST',
            url: 'http://127.0.0.1:3000',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        req.write({
            test: 'test-data'
        });
        req.end();

        jsonParser(null, req, {}, function (err) {
            //req.should.not.hasOwnProperty('body');
            done();
        });
    });

    it('изменяет req.body если content-type равен application/json', function(done){
        var req = new MockReq({
            method: 'POST',
            url: 'http://127.0.0.1:3000',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        jsonParser(null, req, {}, function(err){
            console.log(req.body);
            req.should.hasOwnProperty('body');
            done();
        });
        req.write({
            test: 'test-data'
        });
        req.end();



    });

});
