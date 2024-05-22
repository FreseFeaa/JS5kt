const maskPhone = (phone) => {
    const lastDotInd = phone.lastIndexOf('.');
    const lastFourDigits = phone.substring(lastDotInd + 1);
    return phone.substring(0, lastDotInd + 1) + lastFourDigits.replace(/\d/g, '*');
  };
  
const phones = [
    '590.423.4568',
    '650.124.7234',
    '650.507.9879',
    '011.44.1343.529268',
    '011.44.1344.478968',
    '011.44.1644.429267',
    '11.44.1343.52',
    '11.44.1643.52',
];
  
const maskedPhones = phones.map(maskPhone);
  
console.log(maskedPhones);
module.exports = { maskPhone };