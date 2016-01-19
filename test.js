import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import is7z from './';

test('should detect 7Z from buffer', function (t) {
	readChunk(path.join(__dirname, 'fixture.7z'), 0, 6, function (err, buf) {
		t.is(err, null);
		t.is(is7z(buf), true);
	});
});

test('should not detect 7Z on a non-7Z file', function (t) {
	readChunk(path.join(__dirname, 'fixture.jpg'), 0, 6, function (err, buf) {
		t.is(err, null);
		t.is(is7z(buf), false);
	});
});
