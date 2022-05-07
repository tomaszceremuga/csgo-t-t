let btnlike = document.getElementById('btnlike')
function Liked(){
    if(btnlike.className == "bi bi-heart"){
        btnlike.className = "bi bi-heart-fill"
    }
        else{
            btnlike.className = "bi bi-heart"
    }
    
}