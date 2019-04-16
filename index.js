console.info('Барабаш Максим Сергеевич');
/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var date = new Date(Date.parse(date));
    var options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    var calculateDateTime = {
        dateTime: date,
        add: function (value, unit) {
            if (value < 0) {
                throw new TypeError('Величина сдвига времени заданы некорректно')
            }
            else {
                switch (unit) {
                    case 'years':
                        this.dateTime.setFullYear(this.dateTime.getFullYear() + value);
                        break;
                    case 'months':
                        this.dateTime.setMonth(this.dateTime.getMonth() + value);
                        break;
                    case 'weeks':
                        this.dateTime.setDate(this.dateTime.getDate() + 7 * value);
                        break;
                    case 'days':
                        this.dateTime.setDate(this.dateTime.getDate() + value);
                        break;
                    case 'hours':
                        this.dateTime.setHours(this.dateTime.getHours() + value);
                        break;
                    case 'minutes':
                        this.dateTime.setMinutes(this.dateTime.getMinutes() + value);
                        break;
                    default: throw new TypeError('Единица измерения времени задана некорректно');
                }
            }
            this.value = this.dateTime.toLocaleString('ru', options);
            return this
        },
        subtract: function (value, unit) {
            if (value < 0) {
                throw new TypeError('Величина сдвига времени заданы некорректно')
            }
            else {
                switch (unit) {
                    case 'years':
                        this.dateTime.setFullYear(this.dateTime.getFullYear() - value);
                        break;
                    case 'months':
                        this.dateTime.setMonth(this.dateTime.getMonth() - value);
                        break;
                    case 'weeks':
                        this.dateTime.setDate(this.dateTime.getDate() - 7 * value);
                        break;
                    case 'days':
                        this.dateTime.setDate(this.dateTime.getDate() - value);
                        break;
                    case 'hours':
                        this.dateTime.setHours(this.dateTime.getHours() - value);
                        break;
                    case 'minutes':
                        this.dateTime.setSeconds(this.dateTime.getSeconds() - value);
                        break;
                    default: throw new TypeError('Единица измерения времени задана некорректно');
                }
            }
            this.value = this.dateTime.toLocaleString('ru', options);
            return this
        }
    }
    return calculateDateTime
};
