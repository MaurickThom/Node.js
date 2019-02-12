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
            <li id="product-item">
                <strong>Product</strong>: ${product.name} -
                <strong>Price</strong>: ${product.price} - 
                <strong>Year</strong>: ${product.year}
                <a href=#>Delete</a>
            
            </li>
        `
        productList.appendChild(element)
        this.showMessage('adding','success')
    }
    deleteProduct(element){
        element.parentElement.parentElement.remove()
        this.showMessage('delete','delete')


    }
    showMessage(message,css){
        const div = document.createElement('div')
        div.className=`${css}`
        div.appendChild(document.createTextNode(message))
        const container = document.getElementById('notification')
        container.appendChild(div)
        setTimeout(()=>{
            div.remove()
        },3000)
    }
}
const ui = new UI()
document.getElementById('save').addEventListener('click',e=>{
    e.preventDefault();
    const name = document.getElementById('name').value,
        price = document.getElementById('price').value,
        year = document.getElementById('year').value
    ui.addProduct(new Product(name,price,year))
})
document.getElementById('list-products').addEventListener('click',e=>{
    if(e.target.tagName==='A'){
        e.preventDefault()
        e.target.style.color = 'red'
        ui.deleteProduct(e.target)
    }
})