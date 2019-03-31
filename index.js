/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  // Точка отсчета 01.01.2000 00:00
  let dateTime = date.split(' ');
  date = dateTime[0].split('-');
  let time = dateTime[1].split(':');

  date = new Date(+date[0], date[1] - 1, +date[2], +time[0], +time[1]);

  let obj = {
    date,

    add : function(value, unit) {
      if (value < 0) {
        throw TypeError('Invalid argument: negative value');
      }

      switch (unit) {
        case 'years':
          this.date.setFullYear(this.date.getFullYear() +
            value);
          return this;
        case 'months':
          this.date.setMonth(this.date.getMonth() +
            value);
          return this;
        case 'days':
          this.date.setDate(this.date.getDate() +
            value);
          return this;
        case 'hours':
          this.date.setHours(this.date.getHours() +
            value);
          return this;
        case 'minutes':
          this.date.setMinutes(this.date.getMinutes() +
            value);
          return this;
        default:
          throw TypeError('Invalid argument: unknown unit');
      }
    },

    subtract : function(value, unit) {
      if (value < 0) {
        throw TypeError('Invalid argument: negative value');
      }

      switch (unit) {
        case 'years':
          this.date.setFullYear(this.date.getFullYear() -
            value);
          return this;
        case 'months':
          this.date.setMonth(this.date.getMonth() -
            value);
          return this;
        case 'days':
          this.date.setDate(this.date.getDate() -
            value);
          return this;
        case 'hours':
          this.date.setHours(this.date.getHours() -
            value);
          return this;
        case 'minutes':
          this.date.setMinutes(this.date.getMinutes() -
            value);
          return this;
        default:
          throw TypeError('Invalid argument: unknown unit');
      }
    }
  };

  Object.defineProperty(obj, 'value', {
    get : function() {
      let year = this.date.getFullYear();
      let month = this.date.getMonth() + 1;
      let day = this.date.getDate();
      let hours = this.date.getHours();
      let minutes = this.date.getMinutes();

      return `${year}-${month < 10 ? '0' + month : month}-` +
        `${day < 10 ? '0' + day : day} ` +
        `${hours < 10 ? '0' + hours : hours}` +
        `:${minutes < 10 ? '0' + minutes : minutes}`;
    }
  });

  return obj;
};
