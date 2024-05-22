const test = require("node:test");
const assert = require("node:assert");

const { iIstFridayToday } = require("./05.js");

test("Проверка пятница ли сегодня (Если нет то когда будет/была)", () => {
    assert.deepStrictEqual(iIstFridayToday(0), 'Пятница будет через 4 дня');   
    assert.deepStrictEqual(iIstFridayToday(1), 'Пятница будет через 3 дня');   
    assert.deepStrictEqual(iIstFridayToday(2), 'Пятница будет через 2 дня');   
    assert.deepStrictEqual(iIstFridayToday(3), 'Пятница будет через 1 день');  
    assert.deepStrictEqual(iIstFridayToday(4), 'Завтра пятница!');   
    assert.deepStrictEqual(iIstFridayToday(5), 'Сегодня пятница!');  
    assert.deepStrictEqual(iIstFridayToday(6), 'Пятница была вчера');  
});
