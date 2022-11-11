 function tabuada(){
    let num = document.getElementById ('txtn')
    let tab = document.getElementById ('seltab')
    if (num.value .length == 0){
        alert('Por favor, digite um número!')
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =''
        // while -> enquanto ou pode ser usado o FOR
        while (c <=10 ){
            var item = document.createElement ('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++

        }
    }
 }
