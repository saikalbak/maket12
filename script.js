function showDetails(employeeName) {
    const modal = document.getElementById('detailsModal');
    const title = document.getElementById('modalTitle');
    const role = document.getElementById('modalRole');

    // Здесь вы можете добавить дополнительные детали для каждого сотрудника
    if (employeeName === 'john') {
        title.textContent = 'John Doe';
        role.textContent = 'Web Developer';
    } else if (employeeName === 'jane') {
        title.textContent = 'Jane Doe';
        role.textContent = 'UI/UX Designer';
    }

    modal.style.display = 'block';
}

function closeDetails() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};


let swiper = document.querySelector(".swiper_slides"),
l = document.querySelector("#left"),
r = document.querySelector("#right");

r.addEventListener("click", function(){
    swiper.scrollLeft += 400;
})
l.addEventListener("click", function(){
    swiper.scrollLeft -= 400;
})
document.addEventListener("keydown", function(e){
    if(e.key == "ArrowRight"){
        swiper.scrollLeft += 400;
    }
    if(e.key == "ArrowLeft"){
        swiper.scrollLeft -= 400;
    }
})