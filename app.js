const textArea = document.getElementById('content');
const charactercount=document.getElementById('ch');
const wordcount=document.getElementById('wo');

textArea.oninput = ()=> {
    let character= textArea.Value;
    console.log(character);
    charactercount.textContent = character.replace(/\s/g,'').length;
    let word=textArea.value.split('').filter((item) =>{
        return item !='';
        
    });
    wordcount.textContent=word.length;

    
    };

     
