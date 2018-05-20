const lib = require('../src');

describe('TESTS', () => {
  test('Basic test', (done) => {
    lib.hello((err, message) => {
      expect(err).toBeNull();
      expect(message).toBe('It works!');

      done();
    });
  });
});

describe('Test ReadAndCount', () => {
  test('should behave...', (done) => {
    lib.readAndCount((err, message) => {
      expect(err).toBeNull();
      expect(message).toBe('Ok');
      done();
    });
  });
});

describe('Test LeArquivos', () => {
  test('should behave...', (done) => {
    lib.leArquivos(
      `${__dirname}/files/`,
      (filename, content) => {
        expect(filename).toBe('arquivo.txt');
        expect(content).toMatch(/test read file/);
      },
      (err) => {
        throw err;
      }
    );
    done();
  });
});
describe('Test ReadAndCount', () => {
  test('should behave...', (done) => {
    let result = lib.count('1234 one \n');
    expect(result).toEqual({
      origin: '1234 one \n',
      chars: 10,
      lines: 2,
      words: 1,
      numbers: 4,
      letters: 3,
      wordsigns: 0,
      hash: '2d0fa37f3a3f349e6e6055f640defe62'
    });
    done();
  });
});
