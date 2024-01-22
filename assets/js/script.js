let search = document.getElementById('search')
let sort = document.getElementById('sort')
let pulseBox = document.querySelector('.pulse-box')
let filteredArr = []
let copyArr = []
function getDataJson() {
    fetch(`http://localhost:3000/Pulse`)
        .then(response => response.json())
        .then(data => {
            copyArr = data
            pulseBox.innerHTML = ""
            filteredArr = filteredArr.length || search.value ? filteredArr : data;
            filteredArr.forEach(element => {
                pulseBox.innerHTML += `
            <div class="card">

            <div class="pulse-box-top">
              <h2>${element.name}</h2>
            </div>
            <div class="pulse-box-bottom">
              <p>${element.desc}<span>-----------------------</span></p><h5>${element.price}</h5>
            </div>
            <div class="pulse-box-button">
            <button><a href="details.html?id=${element.id}">Details</a></button>
            </div>
           
          </div>

            `

            });
        })
}
getDataJson()
search.addEventListener('input', (e) => {
    filteredArr = copyArr
    filteredArr = filteredArr.filter((el) => {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    getDataJson()
})
sort.addEventListener('change', (e) => {
    if (e.target.value === "des") {
        filteredArr.sort((a, b) => b.price - a.price)
    }
    else if (e.target.value === "asc") {
        filteredArr.sort((a, b) => a.price - b.price)

    }
    else {
        filteredArr = []
    }
    getDataJson()
})