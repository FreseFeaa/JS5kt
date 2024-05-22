const kingSayd = (string) => {
    if (string.startsWith('Король сказал:')) {
        console.log (string)
      return string;
    } else {
        console.log ('Король сказал: ' + string)
        return 'Король сказал: ' + string;
    }
  };
  
  kingSayd('сегодня хорошая погода');
  
  module.exports = { kingSayd };