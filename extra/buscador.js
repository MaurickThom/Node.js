class Search{
    constructor(obj){
        this.element = document.getElementById(obj.id)
        this.list = obj.list
        this.init()
    }
    init(){
        let input , listContainer
        this.element.innerHTML =`
            <input placeholder="Buscar aquí" type="text" class="input">
            <listgroup class="is-visible" id="searchList"></listgroup>
        `
        input=document.querySelector('.input')
        listContainer = document.getElementById('searchList')
        this.watch(input,this.list,listContainer)
    }
    
    watch(input,list,search){
        input.addEventListener('keyup',()=>{
            // Primero limpiarmos el listContainer para luego se sobre escriba
            search.innerHTML = ``
            let value = input.value.toLowerCase()
            console.log(value)
            list.forEach(item=>{
                if(value){
                    // if(item.toLowerCase().indexOf(value)!==-1){ //si contiene
                    if(item.toLowerCase().indexOf(value)===0){ // si comienza
                        this.updateList(item,search)
                    }
                }
            })
        })
    }
    updateList(item,container){
        container.innerHTML+= `<list-item>${item}</list-item>`
    }
}