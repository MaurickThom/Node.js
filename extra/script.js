class Product{
    constructor(name,price,year){
        this.name=name
        this.price=price
        this.year=year
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('list-products')
        const element = document.createElement('div')
        element.innerHTML=`
            <li id="product-item"><a href=#>Delete</a></li>
        `
        productList.appendChild(element)
    }
    deleteProduct(element){
        productList
    }
    showMessage(message,css){
        const div = document.createElement('div')
        div.className=`${css}`
        div.appendChild(document.createTextNode(message))
        const container = document.getElementById('notification')
    }
}
const ui = new UI()
document.getElementById('save').addEventListener('click',e=>{
    e.preventDefault();
    ui.addProduct()
})
document.getElementById('list-products').addEventListener('click',e=>{
    if(e.target.tagName==='A'){
        e.preventDefault()
        e.target.style.color = 'red'
    }
})