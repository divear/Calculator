


function Calcul(){
    let Textarea = document.getElementById("textarea");
    let SplittedText = Textarea.value.split("");
    let arrayLength = SplittedText.length;
    let problem;
    
    
    for (let i = 0; i < arrayLength; i++) {
        if(isFinite(SplittedText[i]) == false){
            console.log("thats not a number!")
            
        }else{
            
            problem = eval(Textarea.value)
            
          

        }
    }
    if(problem == undefined||problem == Infinity){
        problem = "Error!";
    }
    Textarea.value = problem;
    
};
 