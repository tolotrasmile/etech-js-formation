function map (transformFn) {
  let inputObservable = this
  const outputObservable = createObservable(function subscribe (outputObserver) {
    inputObservable.subscribe({
      ...outputObserver,
      next: function (x) {
        const y = transformFn(x)
        outputObserver.next(y)
      }
    })
  })
  return outputObservable
}

function filter (conditionFn) {
  let inputObservable = this
  const outputObservable = createObservable(function subscribe (outputObserver) {
    inputObservable.subscribe({
      ...outputObserver,
      next: function (x) {
        if (conditionFn(x)) {
          outputObserver.next(x)
        }
      }
    })
  })
  return outputObservable
}

function delay (delay) {
  let inputObservable = this
  const outputObservable = createObservable(function subscribe (outputObserver) {
    inputObservable.subscribe({
      ...outputObserver,
      next: function (x) {
        setTimeout(() => outputObserver.next(x), delay)
      }
    })
  })
  return outputObservable
}

function createObservable (subscribe) {
  return { subscribe, map, filter, delay }
}

const arrayObservable = createObservable(function (ob) {
  [10, 20, 30].forEach(ob.next)
  ob.complete()
})

const clickObservable = createObservable(function (ob) {
  document.addEventListener('click', ob.next)
})

const observer = {
  next: function (data) {
    console.log(data)
  },
  error: function (error) {
    console.log(error)
  },
  complete: function (data) {
    console.log('done')
  }
}

clickObservable
  .map(event => event.clientX)
  .filter(x => x > 0)
  .delay(1000)
  .subscribe(observer)
