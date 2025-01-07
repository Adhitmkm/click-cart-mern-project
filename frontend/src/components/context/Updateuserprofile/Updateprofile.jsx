import { createContext, useState } from "react"

export const Updatecontext = createContext()

export const UpdateprofileProvider = ({children})=>{

    

    const [input, setInput]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conformPassword: ""
    })

    // console.log(input,'====================================');
   

    return (
           <Updatecontext.Provider value={{input , setInput}}>
            {children}
           </Updatecontext.Provider>
    )
}