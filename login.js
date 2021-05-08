const usernameEle = document.getElementById("inputUsername4");
const passwordEle = document.getElementById("inputPassword4");
const validationFormEle = document.getElementById("validationForm")
const passwordErrEle = document.getElementById("passwordErr");
function LoginCheck(username,pwd,nav){
    if(username.value === "admin"){
        if(pwd.value ==="12345"){
            return(nav(true))
            
        }
    }
    return(nav(false))
    
}
function nextPage(result){
    if(result){
        console.log("Next page please")
        passwordErrEle.hidden = true;
        validationFormEle.setAttribute("action","toDoList.html")
        return true
    }else{
        console.log("dont go to next page.")
        passwordErrEle.hidden = false;
        passwordErrEle.innerHTML = "Wrong username/password"
        return false 
    }
}
function validate(){
    console.log("I am in validate")
    console.log(usernameEle.value,passwordEle.value)
 return(LoginCheck(usernameEle,passwordEle,nextPage))
 

}
