alert("Seja Bem-Vindo!")

function light(){
    document.body.style.background='#fff'
    document.body.style.color='#000'
    document.a.style.color='#000'
    document.getElementById("indexLinks").style.color="#000"
    document.getElementById("indexLinks").style.textDecoration="none"
}
function dark(){
    document.body.style.background='#191919'
    document.body.style.color='#fff'
    document.a.style.color='#fff'
    document.getElementById("indexLinks").style.color="#fff"
    document.getElementById("indexLinks").style.textDecoration="none"
    document.getElementsByName('container').style.background="#191919"
}
