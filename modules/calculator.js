class calculator{
    static add = (x, y) => {
        return x + y;
    }

    static subtract = (x, y) => {
        return x - y;
    }

    static times = (x, y) => {
        return x * y;
    }

    static divide = (x, y) => {
        if (y === 0) {
            throw new Error('you can not divide a number by 0')
        } else {
            return x / y;
        }
    }
}

module.exports = calculator;