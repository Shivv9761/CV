const dynamic_content= document.getElementById("dynamic-content");
// console.log(dynamic_content);

const phrases=["Software Engineer....", "Web Developer....", "Creator....", "Artist...."];
let letterIndex=0;
let phrasesIndex=0;
function printDynamic(phrase){

    if(letterIndex==phrase.length){
        clearletters();
    }
    else if(letterIndex<phrase.length){
        dynamic_content.textContent+=phrase.charAt(letterIndex);
        letterIndex+=1;
        setTimeout(function(){printDynamic(phrase)}, 100);

    }
}
 
function clearletters(){
    if(letterIndex==-1){
        letterIndex=0;
        phrasesIndex=(phrasesIndex+1)%phrases.length;
        printDynamic(phrases[phrasesIndex]);
    }
    else if(letterIndex>=0){
        let updatedphrase="";
        for(let index=0;index<letterIndex;index++){
            updatedphrase+=phrases[phrasesIndex].charAt(index);
        }
        dynamic_content.textContent=updatedphrase;
        letterIndex-=1;
        setTimeout(function(){
            clearletters()
        },50);
    }
}

printDynamic(phrases[phrasesIndex]);

