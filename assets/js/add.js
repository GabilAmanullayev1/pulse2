let form = document.querySelector('form')
let nameinput = document.getElementById('name')
let desc = document.getElementById('desc')
let number = document.getElementById('number')
let submit = document.getElementById('submit')
let table = document.getElementById('table')

fetch(`http://localhost:3000/Pulse`)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.desc}</td>
            <td>${element.price}</td>
            <td>
            <button onclick="remove(${element.id})">delete</button>
            </td>
             </tr>
            `
        });
    })
function remove(id){
    axios.delete(`http://localhost:3000/Pulse/${id}`)
}
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const input=[nameinput,desc,number];
    if(nameinput.value.trim() && desc.value.trim() && number.value.trim()){
        let obj = {
            name: nameinput.value,
            desc: desc.value,
            price: number.value
        }
        axios.post("http://localhost:3000/Pulse", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
})