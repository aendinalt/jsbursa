var errorHandler = require('../middlewares/errorHandler');
var should = require('should');
var sinon = require('sinon');
var MockReq = require('mock-req');
var MockRes = require('mock-res');

describe('errorHandler', function(){
    it('является функцией', function (done){
        errorHandler.should.be.type('function');
        done();
    });

    it('вызывает next', function (done){
        errorHandler(null, {'headers':{'content-type': 'testmessage'}}, {} , function () {
            done();
        });
    });

    it('корректно пробрасывает ошибки', function (done) {
        var res = new MockRes();
        sinon.sandbox.create().stub(process, 'env', {'NODE_ENV': 'dev'});
        errorHandler({ message: 'error' }, {}, res, function (err) {
            (err === undefined).should.equal(false);
            err.should.be.eql({ message: 'error' });
            done();
        });
    });

    it('в случае ошибки, корректно ставит код ответа = 500 на продакшне', function (done) {
        var res = new MockRes();
        sinon.sandbox.create().stub(process, 'env', {'NODE_ENV': 'production'});
        errorHandler({ message: 'error' }, {}, res, function (err) {
            res.statusCode.should.be.equal(500);
            done();
        });
    });

    it('в случае ошибки, корректно отсылает ошибку в респонс, если не на продакшне', function (done) {
        var res = new MockRes();
        res.write = sinon.spy(res.write);
        sinon.sandbox.create().stub(process, 'env', {'NODE_ENV': 'staging'});
        errorHandler({ message: 'error' }, {}, res, function (err) {
            res.write.called.should.be.equal(true);
            done();
        });
    });

});
