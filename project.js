const form= document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");


//UI objesini başlatma

const ui=new UI();
//sTORAGE
const storage =new Storage();

//tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        ui.displayMessages("tüm alanları doldurun...","danger");
        
    }

    else{
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm);

        storage.addFilmToStorage(newFilm);
        ui.displayMessages("film başarıyla eklendi...","success");
        
    }


    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}