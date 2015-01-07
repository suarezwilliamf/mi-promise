var sum = require('./app');
sum(2,2,5).then(
  function(){
    console.log('es correcto');
    return sum(3,3,5);
  },
  function(err){
    console.error(err);
    return sum(2,2,4);
  }
).then(
  function(){
    console.log('tambien es correcto');
  }
).catch(
  function (err){
    console.error(err);
  }
);
console.log('tiempo');
