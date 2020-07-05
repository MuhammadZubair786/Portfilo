function num(n){
    console.log(n)
    result = document.getElementById('res')
    result.value +=n
}

function clr(){
    result = document.getElementById('res')
    result.value = ' '
}

function eql(){
    result = document.getElementById('res')
    result.value = eval(result.value)
}

function bksp(){
    result = document.getElementById('res')
    result.value=result.value.toString()
    result.value = result.value.substring(0, result.value.length - 1);
    
}

function sqr(){
    result = document.getElementById('res')
    result.value = result.value**2

}

function srqt(){
    result = document.getElementById('res')
    result.value = Math.sqrt(result.value)
}