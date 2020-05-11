const assert = require('assert');
const JWSocket = require('../index');

describe('Test of the JSONWebSocket.Schema class', () => {
    const schema = new JWSocket.Schema({
        A: "string",
        B,
        C: ["int"],
        D: {
            a: {},
            b: []
        },
        E: "float"
    });
    var object = {
        A: "foobar",
        B: "this will be for escape testing",
        C: [1,2,3],
        D: {
            a: {},
            b: []
        },
        E:12.312
    };
    var encoded_string = `"foobar","this will be for escape testing",[1,2,3],{{},[]},12312`;
    
    describe('encode(object)', () => {
        it('should return the encoded string', () => {
            let result = schema.encode(object)
            assert.equal(result, encoded_string);
        });
    });

    describe('decode(encoded_string', () => {
        it('should return the decoded object', () => {
            let result = schema.decode(encoded_string);
            assert.deepEqual(result, object);
        });
    });
});