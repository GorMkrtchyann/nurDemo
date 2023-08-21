import {createContext, useState} from "react";
import {data} from "../components/data";


export const AllContext = createContext()

export const AllContextProvider = ({children}) => {
    const [grid, setGrid] = useState(false)
    const [gridShow, setGridShow] = useState(false)
    const [lang, setLang] = useState(data.am)

    return(
        <AllContext.Provider value={{grid, setGrid, gridShow, setGridShow, lang, setLang}}>
            {children}
        </AllContext.Provider>
    )
}