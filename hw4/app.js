const usd = document.querySelector('#usd')
const som = document.querySelector('#som')

function convert(elem,elem2){
    elem.addEventListener('input',()=>{
        const request = new XMLHttpRequest()
        request.open('GET','curs.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()
        request.addEventListener('load',()=>{
           const resp= JSON.parse(request.response)
           elem===som && (elem2.value=(elem.value/resp.usd).toFixed(2))
           elem===usd && (elem2.value = (elem.value*resp.usd).toFixed(2))
           elem.value==='' && (elem2.value = elem.value)
        })
    })
}
convert(som,usd)
convert(usd,som)
const data = new Date()

    console.log(data.getSeconds())

