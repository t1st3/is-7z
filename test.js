import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import is7z from '.';

test('should detect 7Z from buffer', t => {
	t.is(is7z(readChunk.sync(path.join(__dirname, 'fixture.7z'), 0, 6)), true);
});

test('should not detect 7Z on a non-7Z file', t => {
	t.is(is7z(readChunk.sync(path.join(__dirname, 'fixture.jpg'), 0, 6)), false);
});
