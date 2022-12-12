import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { contextBaza } from '../context/context'
import All from './All'
import Form from './Form'
import * as yup from "yup";

const Navbar = () => {

    

    const { deleteFun, result, resultFun, handleSubmit, setDate, date, reset, select, setSelect } = React.useContext(contextBaza)

    const submitFun = (value) => {
        if (select !== '') {
            setDate([...date, { ...value, checkbox: false, id: new Date().getTime(), select: select }])
            setSelect('')
            resultFun(false)
            reset();
        }
    }

    // obj keylari
    const schema = yup
        .object({
            dvd: yup.string().required(),
            sku: yup.string().required(),
            price: yup.number().required(),
            name: yup.string().required(),
            kg: yup.number(),
            size: yup.number(),
            weight: yup.number(),
            width: yup.number(),
            height: yup.number(),
            length: yup.number(),
        })
        .required();


    return (
        <Router>
            <nav>
                <div className="logo">
                    <NavLink to='/'>
                        Product {result ? "Add" : "List"}
                    </NavLink>
                </div>
                <ul>

            

                      {
                        result ?
                           <li>
                              <button className='btn' onClick={handleSubmit(submitFun)}>
                                    <NavLink to={select !== '' ? '/' : '/form'}>
                                        Save
                                    </NavLink>
                                </button>
                            </li>
                            :
                            <NavLink to='/form'>
                                <li>
                                    <button className='btn' onClick={() => resultFun(true)}>Add</button>
                                </li>
                            </NavLink>
                    }
                    {
                        result ?
                            <li>
                                <button className='btn' onClick={() => resultFun(false)}>
                                    <NavLink to='/'>
                                        Cancel
                                    </NavLink>
                                </button>
                            </li>
                            :
                            <li>
                                <button className='btn' onClick={deleteFun}>MASS DELETE</button>
                            </li>
                    }

                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<All />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </Router>
    )
}

export default Navbar