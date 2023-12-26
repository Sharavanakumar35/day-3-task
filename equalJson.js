let obj1 = {'name': 'Person1', 'age': 5};

let obj2 = {'age': 5, 'name': 'Person1'};

function isEqual(a={}, b={}) {
  const a_keys = Object.keys(a);
  const b_keys = Object.keys(b);

  let flag = true;
  a_keys.forEach(akey => {
    b_keys.forEach(bkey => {
        if (akey === bkey && a[akey] === b[bkey]) {
            flag = flag && ((akey === bkey && a[akey] === b[bkey]));
        }
    });
  });

  return flag;
}

console.log('obj1 = ', obj1);
console.log('obj2 = ', obj2);
console.log('Two JSON with same properties but different order are Equal = ', isEqual(obj1, obj2));