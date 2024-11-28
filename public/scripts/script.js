// show email buttons if mailing list checked
const mailingList = document.getElementById("mailingList");
mailingList.addEventListener("change", function() {
    if (mailingList.checked){
        document.getElementById("format").style.display = "inline";
    } else {
        document.getElementById("format").style.display = "none";
    }
})

// show other box when other is selected
const meetListening = document.getElementById("meet");
meetListening.addEventListener("change", function(){
    if (meetListening.value == "other"){
        document.getElementById("textMeetContainer").style.display = "inline";
    } else {
        document.getElementById("textMeetContainer").style.display = "none";
    }
    
})



document.getElementById("contact-form").onsubmit = function(){

    clearErrors();

    // set flag
    let isValid = true;

    // name empty
    let fName = document.getElementById("fName").value;
    if (fName == ""){
        document.getElementById("firstName-err-req").style.display = "inline";
        isValid = false;
    }

    // lastname empty
    let lName = document.getElementById("lName").value;
    if (lName == ""){
        document.getElementById("lastName-err-req").style.display = "inline";
        isValid = false;
    }

    // email invalid
    let email = document.getElementById("email").value;

    if (email !== ''){
        if ((!email.includes("@")) || (!email.includes("."))){
            document.getElementById("email-err-format").style.display = "inline";
            isValid = false;
        }
    }
    
    // when mailing list checked email required


    if (mailingList.checked && email == ""){
        document.getElementById("email-err-req").style.display = "block";
        isValid = false;
    }

    
    

    // linkedin is valid
    let linkedIn = document.getElementById("linkedIn").value;
    if (linkedIn !== ''){
        if (!linkedIn.startsWith("https://www.linkedin.com/in/")){
            document.getElementById("linkedIn-err-format").style.display = "inline";
            isValid = false;
        }
    }
    

    // check if meet
    let meet = document.getElementById("meet").value;
    if (meet == "none"){
        document.getElementById("meet-err-req").style.display = "inline";
    }

    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(i = 0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
}