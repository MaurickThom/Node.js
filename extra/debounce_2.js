import words from './palabras.js' ;
// Debounce es una técnica muy poderosa que se utiliza para optimizar la invocacion de funciones costosas
console.log(words)
const input = document.getElementById('input')
const content_ = document.getElementById('js-result')
const renderResult = (letter)=>{
    const result = words
    .filter(word=>{
        if(word.toLowerCase().match(`.*${letter.toLowerCase().trim()}.*`)) return word;
    })
    .map(word=>`<li>${word}</li>`)
    .join('')
    content_.innerHTML=result
}
const debounce = (callback,time)=>{
    let timeoutId
    if(timeoutId) clearTimeout(timeoutId)
    return function(){
        timeoutId=setTimeout(()=>{
            callback.apply(this,arguments)
        },time)
    }
}
const triggerContent = debounce(renderResult,100)
renderResult('')
input.addEventListener('keyup',e=>{
    triggerContent(e.target.value)
})