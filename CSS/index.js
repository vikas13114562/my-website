const nav = document.getElementById('nav');
const project = document.querySelector('.projects')

nav.addEventListener('click', ()=>{
    if(project.style.display === "block") {
        project.style.display = "none"
    }
    else{
        project.style.display = "block"
        
    }
    
    
})
