export default class Card {
  constructor(cardnumber, name, validDate, ccv, vendor) {
    this.cardnumber = cardnumber;
    this.name = name;
    this.validDate = validDate;
    this.ccv = ccv;
    this.vendor = vendor;
  }
}
