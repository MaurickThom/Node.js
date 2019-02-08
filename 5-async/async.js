const sumAfterTwoSeconds = (a, b) => new Promise(resolve => setTimeout(resolve(a + b), 2000))

const sumAll = () => {
  return sumAfterTwoSeconds(2, 2)
    .then(response => sumAfterTwoSeconds(response, 2)
      .then(response => sumAfterTwoSeconds(response, 2)))
}
sumAll().then(data => console.log(data))

// Usando Async Await
const asyncSumAll = async ()=>{
	const four = await sumAfterTwoSeconds(2,2)
	const six = await sumAfterTwoSeconds(four,2)
	return await sumAfterTwoSeconds(six,2)
}
asyncSumAll().then(total=>console.log(total))