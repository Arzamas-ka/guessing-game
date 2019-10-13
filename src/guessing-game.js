class GuessingGame {
    constructor() {
        this.numMiddle = 0;
    }

    setRange(min, max) {
        this.numMin = min;
        this.numMax = max;
    }

    guess() {
        return this.numMiddle = Math.ceil((this.numMin + this.numMax) / 2);
    }

    lower() {
        return this.numMax = this.numMiddle;
    }

    greater() {
        return this.numMin = this.numMiddle;
    }
}

module.exports = GuessingGame;
