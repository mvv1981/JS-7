/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    date = Date.parse(date.replace(' ', 'T') + ':00.000');
    date = new Date(date);
    
       var objDateTime = {
       date,
       add: function (count, measure) {
           if(count < 0) {
               throw TypeError ("Передано неверное значение");
           }
           
           switch (measure) {
               case 'years':
                   this.date.setFullYear(date.getFullYear() + count);
                   break;
                   
               case 'months':
                   this.date.setMonth(date.getMonth() + count);
                   break;
                   
               case 'days':
                   this.date.setDate(date.getDate() + count);
                   break;
                   
               case 'hours':
                   this.date.setHours(date.getHours() + count);
                   break;
                   
               case 'minutes':
                   this.date.setMinutes(date.getMinutes() + count);
                   break;
                   
               default:
               throw TypeError ("Передано неверное значение");
                   
           }
           
           return this;
       },
       subtract: function (count, measure) {
           if(count < 0) {
               throw TypeError ("Передано неверное значение");
           }
             switch (measure) {
               case 'years':
                   this.date.setFullYear(date.getFullYear() - count);
                   break;
                   
               case 'months':
                   this.date.setMonth(date.getMonth() - count);
                   break;
                   
               case 'days':
                   this.date.setDate(date.getDate() - count);
                   break;
                     
               case 'hours':
                   this.date.setHours(date.getHours() - count);
                   break;
                   
               case 'minutes':
                   this.date.setMinutes(date.getMinutes() - count);
                   break;
                   
               default:
               throw TypeError ("Передано неверное значение");
                   
           }
           
           return this;
       } 
           
      
   }
       Object.defineProperty(objDateTime, 'value', {
       get : function() {
        
         if(+this.date < +new Date(2000, 0, 1)) {
               this.date = new Date(2000, 0, 1);
               console.info('Дата не должна быть ранее 1 января 2000 года')
           }
        
          var month = this.date.getMonth() + 1;
          if (month < 10) {
              month = '0' + month;
          }
          var minutes = this.date.getMinutes();
          if (minutes < 10) {
              minutes = '0' + minutes;
          }
          var result = this.date.getFullYear() + '-' + month + '-' + this.date.getDate() + ' ' + this.date.getHours() + ':' + minutes;
           return result;
       
    }
  });
    
       return objDateTime;
};
