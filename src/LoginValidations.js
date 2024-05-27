function Validation(values){
    let error = {}
    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ 

    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
            error.email = "Email did't match"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password did't match, Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    }else{
        error.password = ""
    }
    return error;
}
export default Validation;