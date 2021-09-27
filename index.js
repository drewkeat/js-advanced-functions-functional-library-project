function collectionCheck(collection) {
  return typeof collection === "array" ? collection : Object.values(collection);
}

function myEach(collection, callback) {
  let array = collectionCheck(collection);
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  let array = collectionCheck(collection);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let array = collectionCheck(collection);

  if (!acc) {
    acc = array[0];
    array = array.slice(1);
  }

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], array);
  }

  return acc;
}

function myFind(collection, predicate) {
  const array = collectionCheck(collection);

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i];
    }
  }
}

function myFilter(collection, predicate) {
  const array = collectionCheck(collection);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function mySize(collection) {
  const array = collectionCheck(collection);
  let i = 0;
  while (array[i + 1] != null) {
    i += 1;
  }

  return i + 1;
}

function myFirst(collection, n) {
  const array = collectionCheck(collection);
  let result;
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(collection, n) {
  const array = collectionCheck(collection);
  const last = array.length - 1;
  if (n) {
    return array.slice(array[last - n], array[last]);
  } else {
    return array[last];
  }
}

function myKeys(object) {
    let result = []
    for (const key in object) {
        result.push(key)
    }
    return result
}

function myValues(object) {
    let result = []
    for (const key in object) {
        result.push(object[key])
    }
    return result
}