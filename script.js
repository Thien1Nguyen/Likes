const likeList = document.querySelectorAll(".like")

function likeCount(likePosition){
    likeList[likePosition].innerHTML++;
}