import {useState} from 'react';
const usePassword = ()=>{
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    
    const generatepassword = (checkboxesData,length)=> {
        let charSet = "";
        let generatedPassword = "";

        let selectedOption = checkboxesData.filter((checkbox)=> checkbox.state);
            if(selectedOption.length === 0){
                setError("select atleast one checkbox");
                setPassword("");
                return;
            }
        selectedOption.forEach((option)=>{
            switch(option.title){
                case "Include UpperCase Letters":
                    charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include LowerCase Letters":
                    charSet+= "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charSet+="0123456789";
                    break;
                case "Include Symbols":
                    charSet+="~!@#$%^&*()_";
                    break;
                    
                 default:
                    break;   
            }
        })

        for(let i=0;i<length;i++){
            const randomPassword = Math.floor(Math.random()*charSet.length);
            generatedPassword +=charSet[randomPassword];
        }
        setPassword(generatedPassword);
        setError("");
    }

    return {password,error,generatepassword}
}
export default usePassword;