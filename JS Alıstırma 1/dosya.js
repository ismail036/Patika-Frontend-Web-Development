let examGrade = prompt("Puanı Giriniz")
let textInfo 
if(examGrade<100 && examGrade>0){
    if(examGrade>=90 ){
        textInfo = "AA"
    }
    else if(examGrade>= 85){
        textInfo = "BA"
    }
    else if(examGrade >= 80){
        textInfo="BB"
    }
    else if(examGrade>= 75){
        textInfo = "CB"
    }
    else if(examGrade >= 70){
        textInfo = "CC"
    }
    else if(examGrade >= 65){
        textInfo = "DC"
    }
    else if(examGrade >= "60"){
        textInfo = "DD"
    }
    else if(examGrade >= "50"){
        textInfo  = "FD"
    }
    else if(examGrade < 50){
        textInfo = "FF"
    }
}
else{
    textInfo = "Not 0 il 100 arasında olmalıdır"
}

let info = document.querySelector("#info")
info.innerHTML = `${textInfo}`