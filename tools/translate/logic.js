const fs = require('fs');
const fullpath = '../../src/utils/i18n/langs/';

let getOneLanguage = function (options, name) {
  const language = readFile(fullpath + options.language + '.json');

  if (language.hasOwnProperty(name)) {
    console.log('LANGUAGE=%s KEY=%s VALUE=%s ', options.language, name, language[name]);
  }
  else {
    console.log('Key=%s not found for language=%s', name, options.language);
  }
};

let sortJsonObject = function (obj) {
    let keys = Object.keys(obj).sort();
    let sortedObj = {};
    
    for (let i in keys) {
        sortedObj[keys[i]] = obj[keys[i]];
    }
    
    return sortedObj;
}

const getKey = (name, options) => {
  options.language = options.language || 'ALL';

  if (options.language === 'ALL') {
    const filesNames = fs.readdirSync(fullpath);
    filesNames.forEach((filename) => {
      getOneLanguage({language: filename.split('.')[0]}, name)
    })
  }
  else {
    getOneLanguage(options, name);
  }

};

const addKey = (name, options) => {
  const filesNames = fs.readdirSync(fullpath);
  filesNames.forEach((filename) => {
    let jsonData = readFile(fullpath + filename);
    if(filename.indexOf('es') === 0){
      jsonData[name] = options.es;
    }
    else {
      jsonData[name] = options.en;
    }

    let sortedJson = sortJsonObject(jsonData);

    fs.writeFile(fullpath + filename, JSON.stringify( sortedJson,null, 4), function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
};

/**
 * Compare that the files have the same translation keys
 */
const compareKeys = () => {
    const translationKeys = [[]];
    const filesNames = fs.readdirSync(fullpath);
    filesNames.forEach((file, key) => {
        const jsonData = readFile(fullpath + file);
        translationKeys.push({
            file: file,
            keys: Object.keys(jsonData),
            counter: Object.keys(jsonData).length
        });
    });

    var filesCounter = 0
    var keysCounter = 0
    console.table(translationKeys);
    translationKeys.forEach((file, key) => {
        if (translationKeys[key + 1] === 0) {
            console.warn('File %s is empty', file.file);
        }
        keysCounter += file.keys.length;
        filesCounter += file.counter;
    });

    // if (!translationKeys.reduce((a, b) => a === b)) {
    //     const missingKey = translationKeys[0].filter(x => !translationKeys[1].includes(x));
    //     throw new Error(`All files must contain the same keys : Missing key ${missingKey} in file ${translationKeys[1]}`);
    // }
    console.info('Complete validate translation keys');
};

const readFile = (dir) => {
  let rawString = fs.readFileSync(dir, "utf8");
  return JSON.parse(rawString);
};
module.exports = {addKey, getKey, compareKeys};


