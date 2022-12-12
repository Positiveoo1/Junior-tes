import React, { createContext, useState } from 'react'
import { useForm } from "react-hook-form";


export const contextBaza = createContext()

const DateContext = ({ children }) => {

    const [date, setDate] = useState([]);


    


    // Save 
    const [result, setResult] = useState(false);

    //  Result funk
    const resultFun = (boolean) => {
        setResult(boolean)
    }



    const {
        // inputlarga name berish
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // card belgilash
    const checkboxFun = (item) => {
        setDate(date.map((val) => val.id === item.id ? { ...item, checkbox: !item.checkbox } : val))
    }


    // Mass delete button O'chirish
    const deleteFun = () => {
        setDate(date.filter((val) => val.checkbox !== true))
    }
    const [select, setSelect] = useState('');
    return (


        <contextBaza.Provider value={{ select, setSelect, errors, deleteFun, checkboxFun, date, setDate, register, handleSubmit, reset, result, setResult, resultFun }}>

            {children}
        </contextBaza.Provider>
    )
}
export default DateContext