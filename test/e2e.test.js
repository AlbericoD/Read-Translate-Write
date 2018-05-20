const lib = require('../src');

describe('E2E', () => {
  test('should behave...', (done) => {
    lib.leArquivos(
      `${__dirname}/files/`,
      (filename, content) => {
        expect(filename).toBe('arquivo.txt');
        expect(content).toMatch(/test read file/);
        let conteudo = lib.count(content);
        console.log(conteudo);
        // expect(conteudo.letter).toEqual(12);
        // expect(conteudo.char).toEqual(15);
        // expect(conteudo.word).toBe(3);
      },
      (err) => {
        throw err;
      }
    );
    done();
  });
});
