'use strict';

const cheerio = require('cheerio');
const request = require('request-promise');

const URL = 'http://163.247.67.247/tie/estados_tarjetas/tneEmitidas';

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function clean(val) {
  val = val.trim();
  val = replaceAll(val, '"', '');
  val = replaceAll(val, ';', '');
  val = replaceAll(val, `'`, '');
  return val;
}

function validate(rut, tne) {
  rut = rut.split('/');
  const seq = tne['pers_run'];
  const verif = tne['pers_dv_run'];
  return seq === rut[0] && verif === rut[1];
}

module.exports = function(rut) {
  rut = rut.replace('-', '/').replace('.', '').replace(' ', '');
  const url = `${URL}/${rut}`;

  return request.get(url).then((body, resp) => {
    const $ = cheerio.load(body);
    return $('script').get()[0].children[0].data;
  })
  .then(info => {
    const tne = {};

    info = replaceAll(info, 'parent.document.frm_tne.', '');
    info = replaceAll(info, '.value', '');

    const lines = info.split('\n');
    lines.forEach(line => {
      const split = line.split('=');
      let key = split[0];
      let val = split[1];

      if (key && val) {
        key = clean(key).replace('tne_', '');
        val = clean(val);

        if (key !== '' && val !== '') {
          tne[key] = val;
        }
      }
    });

    if (validate(rut, tne)) {
      return tne;
    } else {
      throw new Error('Not found or invalid');
    }
  });
}
