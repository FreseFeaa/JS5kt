const getInfo = (prices) => {
    let StartPrice = 0;
    let EndDollar = 0;
  
    prices.forEach((price) => {
      if (price.startsWith('Цена')) {
        StartPrice++;
      }
      if (price.endsWith('$')) {
        EndDollar++;
      }
    });
  
    return [StartPrice, EndDollar];
  };
  
  const prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена',
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
  ];
  
  console.log(getInfo(prices));

  module.exports = { getInfo };