const Log = console.log;
const lib = require('./index');
let diretorios = [];
let data = {};

Log('\t.::BRATHENA::.\n\t.::TRADUTOR::.');

lib.leDiretorios(`${__dirname}/../npc/`);
