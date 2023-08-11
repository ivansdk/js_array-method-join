'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      let current = this[i];

      if (current === null || current === undefined) {
        current = '';
      }

      if (i === this.length - 1) {
        result += current;

        return result;
      }

      result += `${current}${separator}`;
    }
  };
}

module.exports = applyCustomJoin;
