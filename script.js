
function count(){
    let box = document.getElementById('output');
    let opt = document.createElement('li');
    let delBtn = document.createElement('button');
    let done = document.createElement('button');


    let myWord = document.getElementById('userInput').value;


   
    
     if(myWord !== ""){
        
        
        opt.textContent = `${myWord} `; //
        delBtn.innerHTML = `<i class="fa-solid fa-xmark" style="color: #ff0000;"></i>`;
        done.innerHTML = `<i class="fa-regular fa-square-check" style="color: #000000;"></i>`;


        box.prepend(opt)
        opt.appendChild(delBtn);
        opt.prepend(done);
      myWord = document.getElementById('userInput').value = "";
     }
     
     else{
        alert("please add a task");
     }
}


 // let str = myWord.replace(/\s/g, "");
    // let strLen = str.length;

    //console.log(`${myWord}  has ${strLen} characters`);
// opt.textContent = ` "${myWord}"  has ${strLen} characters`;