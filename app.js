module.exports = function (num1, num2, sum){

  var q = require ('q');
  var estado = q.defer();

  if (num1 + num2 == sum){
    estado.resolve();
  }else{
    estado.reject(
      new Error('no coincide el valor de la suma con el resultado')
    );
  }
  return estado.promise;
};
