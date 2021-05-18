function sayiUret() {
    return Math.ceil(Math.random() * 20)
}

sayiUret()

var sayi1 = sayiUret()
var sayi2 = sayiUret()
var sayi3 = sayiUret()

console.log(sayi1 + ' ' +sayi2+ ' ' +sayi3)

var enBuyuk = sayi1

if(enBuyuk<sayi2){
    enBuyuk = sayi2
    
}
if(enBuyuk<sayi3){
    enBuyuk = sayi3
    
}

console.log('Bu sayiların icindeki en buyuk =' + enBuyuk)