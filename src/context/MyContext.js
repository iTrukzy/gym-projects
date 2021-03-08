import React, { createContext, useState }from 'react'


export const MyContext = createContext()

const ContextSettings = ({children}) => {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [info, setInfo] = useState(null)

 




    return (
        <MyContext.Provider value={{user, setUser, setEmail, setPassword, email, password, info, setInfo}}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextSettings