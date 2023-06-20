// write your code here
const ramenMenu = document.querySelector("#ramen-menu")
const ramenImage = document.querySelector(".detail-image")
const ramneName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")
const ramenRating = document.querySelector("#rating-display")
const ramenComments = document.querySelector("#comment-display")
const newRamen = document.querySelector("#new-ramen")
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    
})
newRamen.addEventListener("submit", (e) => {
    addNewRamen(e)

})
function fetchData(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => {
        data.forEach(ramen => {
            displayImage(ramen)
        })
        showDetails(data[0])
    })
}
function displayImage(ramen) {
    console.log(ramen)
    const img = document.createElement('img')
    img.src = ramen.image
    img.addEventListener("click", ()=> {
        showDetails(ramen)
    })

    ramenMenu.appendChild(img)
}
function showDetails(ramen) {
    console.log(ramen)
    ramenImage.src = ramen.image
    ramneName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    ramenRating.textContent = ramen.rating
    ramenComments.textContent = ramen.comment


}
function addNewRamen(e) {
    e.preventDefault();

    let body = {
        name: e.target["new-name"].value,
        restaurant: e.target["new-restaurant"].value,
        rating: e.target["new-rating"].value,
        comment: e.target["new-comment"].value,
        image: e.target["new-image"].value,
    }
    console.log(body)
    displayImage(body)
}