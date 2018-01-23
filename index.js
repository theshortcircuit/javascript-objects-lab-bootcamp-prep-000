var recipes = {foo: 'bar'}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object, {[key]:value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}