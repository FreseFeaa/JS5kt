const maskCard = (card) => {
    const first4 = card.substring(0, 4);
    const last4 = card.substring(card.length - 4);
    const maskedPart = '*'.repeat(3);
    return first4 + maskedPart + last4;
  };
  
  const cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699',
  ];
  
  const maskedCards = cards.map(maskCard);
  
  console.log(maskedCards);
  
  
module.exports = { maskCard };