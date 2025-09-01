
import { useState,useEffect } from "react";
const useOnlineStatus = () => {
    //check if user is online or not
    //we will use online event listener
   //as we use empty dependency array
   //  it(code inside useEffect)
   //  will be executed only onde 
   const [onlineStatus,setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])
    return onlineStatus;
}
export default useOnlineStatus;