const test = require("node:test");
const assert = require("node:assert");

const { kingSayd } = require("./04.js");

test("Добавление к фразе 'важности' (Ну как-будто это король говорит (С проверкой на фразу короля))", () => {
    assert.deepStrictEqual(kingSayd('сегодня хорошая погода'), 'Король сказал: сегодня хорошая погода');   
    assert.deepStrictEqual(kingSayd('Казнить нельзя помиловать'), 'Король сказал: Казнить нельзя помиловать');   
    assert.deepStrictEqual(kingSayd(''), 'Король сказал: ');   


});
