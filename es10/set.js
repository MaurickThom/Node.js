let bolsa=new Set()
bolsa.add('naranja')
    .add('manzana')
    .add('naranja')
console.log(bolsa)
console.log(bolsa.has('manzana'))// si hay prsencia 
bolsa.delete('manzana')
bolsa.clear()

let newBolsa = new Set(['fresas','mandarinas'])

for (let fruta of bolsa) {
    console.log(fruta);
}
const arr = [...bolsa]
