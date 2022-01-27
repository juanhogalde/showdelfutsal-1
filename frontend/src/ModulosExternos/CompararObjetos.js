function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

const compararObjetos = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];
    let areObjects = isObject(val1) && isObject(val2);

    if ((areObjects && !compararObjetos(val1, val2)) || (!areObjects && val1 !== val2))
      return false;
  }

  return true;
};
export default compararObjetos;
