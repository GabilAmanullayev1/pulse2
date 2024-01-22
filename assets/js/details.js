let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/Pulse/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML += `
    <div class="pulse-box-top">
    <h2>${data.name}</h2>
  </div>
  <div class="pulse-box-bottom">
    <p>${data.desc}<span>-----------------------</span></p><h5>${data.price}</h5>
  </div>
`
})
