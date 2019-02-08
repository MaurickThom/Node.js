const sumAfterTwoSeconds = (a, b) => new Promise(resolve => setTimeout(resolve(a + b), 2000))

const sumAll = () => {
  return sumAfterTwoSeconds(2, 2)
    .then(response => sumAfterTwoSeconds(response, 2)
      .then(response => sumAfterTwoSeconds(response, 2)))
}
sumAll().then(data => console.log(data))