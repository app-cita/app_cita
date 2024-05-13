/* fetch("../data/turistas.json")
.then(resp => resp.json())
.then(data => console.log(data)) */

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('popup-active');
}
function hidePopup(){
    const popup = document.getElementById('popup');
    popup.classList.remove('popup-active');
}

