/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
var date_time = new Date(date);
var time = {
    date: date_time,
    value: date_time.toLocaleString("ru", {year: "numeric", month: "2-digit", day: "2-digit",hour: "2-digit", hour12: false, minute: "2-digit"}),

    add: function (value, param){
        if (value < 0) {
            throw TypeError ("Введено не корректное значение");
        } 
        switch (param) {
            case ('years'): 
                this.date.setFullYear(this.date.getFullYar() + value);
                break;
            case ('months'): 
                this.date.setMonth(this.date.getMonth() + value);
                break;
            case ('days'): 
                this.date.setDate(this.date.getDate() + value);
                break;
            case ('hours'): 
                this.date.setHours(this.date.getHours() + value);
                break;
            case ('minutes'): 
                this.date.setMinutes(this.date.getMinutes() + value);
                break;
            default:
            throw TypeError ("Введено не корректное значение");
        };
        this.value = this.date.toLocaleString("ru", {year: "numeric", month: "2-digit", day: "2-digit",hour: "2-digit", hour12: false, minute: "2-digit"});      
        return this;                
    },

    subtract: function(value, param){
        if (value < 0) {
            throw TypeError ("Введено не корректное значение");
        } 
        switch (param) {
            case ('years'): 
                this.date.setFullYear(this.date.getFullYar() - value);
                break;
            case ('months'): 
                this.date.setMonth(this.date.getMonth() - value);
                break;
            case ('days'): 
                this.date.setDate(this.date.getDate() - value);
                break;
            case ('hours'): 
                this.date.setHours(this.date.getHours() - value);
                break;
            case ('minutes'): 
                this.date.setMinutes(this.date.getMinutes() - value);
                break;
            default:
            throw TypeError ("Введено не корректное значение");
        }; 
        this.value = this.date.toLocaleString("ru", {year: "numeric", month: "2-digit", day: "2-digit",hour: "2-digit", hour12: false, minute: "2-digit"});
        return this;                
    }
}
return time;
};




