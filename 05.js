const iIstFridayToday = (todayDay) => {

    const friday = 5; // Номер пятницы
    // const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']; // Это чисто для себя чтоб понять как он дни считает
    const daysToFriday = (friday - todayDay + 7) % 7; // Количество дней до пятницы
    if (todayDay === friday) {
      return 'Сегодня пятница!';
    } else if (todayDay === (friday + 1) % 7) {
      return 'Пятница была вчера';
    } else if (todayDay === (friday - 1) % 7) {
      return 'Завтра пятница!';
    } else {
      return ('Пятница будет через ' + (daysToFriday - 1) +((daysToFriday - 1) == 1 ? ' день' : ' дня'));

    }
  };
  const today = new Date();
  const todayDay = today.getDay(); // Получаем номер дня недели (0 - воскресенье, 6 - суббота)
 
  console.log(iIstFridayToday(todayDay));

  module.exports = { iIstFridayToday };
  