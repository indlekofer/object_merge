export default (objects) => {
  var obj = {};
  for (var i = 0, c = objects.length; i < c; i++) {
    for (let key in objects[i]) {
      //do not replace
      //avoid prototypes 
      if (objects[i].hasOwnProperty(key)) {
        obj[key] = objects[i][key];
      }
    }
  }
  return obj;
}
