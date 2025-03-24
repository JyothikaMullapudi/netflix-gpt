export const signinValidation =(email,password)=>{

    const isValidaEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidaPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidaEmail) return "Please enter correct email address";
    if(!isValidaPassword) return "Please enter correct Password";

    return  null;

}