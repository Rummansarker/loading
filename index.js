
document.getElementById('searchBtn').addEventListener('click', function(){

    const loadingBtn = document.querySelector('.loading-control');
    loadingBtn.style.display="block";

    let dots = window.setInterval( function(){
        let wait = document.getElementById('wait');
        if(wait.innerHTML.length > 4){
            wait.innerHTML = "";
        }
        else{
            wait.innerHTML += "."; 
        }

    }, 1000);
});