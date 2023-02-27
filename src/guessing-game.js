class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.half;
    this.ans;
  }

  setRange(min, max) {
    this.max = max;
    this.min = min;
    this.half = this.calcNewAns();
    this.ans = this.half;
  }

  guess() {
    return this.ans;
  }

  lower() {
    this.max = this.ans;
    this.ans = this.calcNewAns();
  }

  greater() {
    this.min = this.ans;
    this.ans = this.calcNewAns();
  }

  calcNewAns() {
    return Math.round((this.max + this.min) / 2);
  }
}

module.exports = GuessingGame;
