'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const icuWrapper = require('bindings')('icuWrapper');

describe('DetectCharacterEncoding', () => {
	const detectCharacterEncoding = icuWrapper.DetectCharacterEncoding;

	function getFixture(fixture) {
		return fs.readFileSync(path.join(__dirname, 'fixtures', fixture));
	}

	it('should return the encoding', () => {
		assert.equal(detectCharacterEncoding(getFixture('utf-8.txt')).encoding, 'UTF-8');
	});

	it('should return a confidence value', () => {
		assert(typeof detectCharacterEncoding(getFixture('utf-8.txt')).confidence === 'number');
	});

	it('should throw a TypeError if argument is not a buffer', () => {
		assert.throws(() => {
			detectCharacterEncoding('string');
		}, TypeError);
	});
});

describe('DetectCharacterEncoding', () => {
	const detectAllCharacterEncodings = icuWrapper.DetectAllCharacterEncodings;

	it('should throw a TypeError if argument is not a buffer', () => {
		assert.throws(() => {
			detectAllCharacterEncodings('string');
		}, TypeError);
	});
});
