// Add your functions here
const map = (arr, func) => arr.map(e => func(e))

const reduce = (sourceArray, func, startingPoint) => {
    let r = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
    for (; i < sourceArray.length; i++) {
      r = func(sourceArray[i], r)
    }
    return r;
  }