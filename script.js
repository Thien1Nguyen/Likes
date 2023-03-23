// const likeList = document.querySelectorAll(".like")

// function likeCount(likePosition){
//     likeList[likePosition].innerHTML++;
// }

let likeUp = document.querySelector(".like")

function likeCount(element){
    element.previousElementSibling.firstElementChild.innerHTML++;
    console.log(element.previousElementSibling.firstElementChild.innerHTML)
}