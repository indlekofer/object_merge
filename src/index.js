export default (objects) => {
  var obj = {};
  for (var i = 0, c = objects.length; i < c; i++) {
    for (let key in objects[i]) {
      //do not replace prototypes 
      if (Object.prototype.hasOwnProperty.call(objects[i], key)) {
        obj[key] = objects[i][key];
      }
    }
  }
  return obj;
};
