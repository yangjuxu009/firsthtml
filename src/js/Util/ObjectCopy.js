export function arrayCopy(originObj, targetObj){
  for (let key in originObj) {
    if (originObj.hasOwnProperty(key)) {
      if (typeof originObj[key] === 'object' && originObj[key] != 'null') {
        if (Object.prototype.toString.call(originObj[key]) == '[object Array]') {
          targetObj[key] = [];
        }else {
          targetObj[key] = {};
        }
        arrayCopy(originObj[key], targetObj[key]);
      } else if (typeof originObj[key] === 'function') {
        targetObj[key] = originObj[key];
      }else {
        targetObj[key] = originObj[key];
      }
    }
  }
  return targetObj;
}


