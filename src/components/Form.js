import React, { useState } from 'react'
import { contextBaza } from '../context/context'
// import { useNavigate } from 'react-router-dom'



const Form = () => {
    const { register, errors, select, setSelect } = React.useContext(contextBaza)
    return (
        <>
            <div className="cont_form">
                <form>
                    <h2>Product Add</h2>
                    <input type="text" className={errors.sku ? 'activ' : ''} placeholder='SKU' {...register('sku', { required: 'Please enter your SKU!', })} />
                    {errors.sku ? <p className='red'>Please enter your SKU!</p> : null}
                    <input type="text" className={errors.name ? 'activ' : ''} placeholder='Name' {...register('name', {
                        required: "Please enter your name!",
                    })} />
                    {errors.name ? <p className='red'>Please enter your name!</p> : null}
                    <input type="number" className={errors.price ? 'activ' : ''} placeholder='Price in $' {...register('price', {
                        required: "Please enter your price!",
                    })} />
                    {errors.price ? <p className='red'>Please enter your price!</p> : null}
                    <select placeholder='Type Switcher' className={errors.dvd ? 'activ' : ''} onChange={(e) => setSelect(e.target.value)}>
                        <option value="">---</option>
                        <option value="DVD">DVD</option>
                        <option value="Book">Book</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                    {errors.dvd ? <p className='red'>Please enter your dvd!</p> : null}
                    {
                        select === "DVD" ?
                            <>
                                <div className="chiziq"></div>
                                <input type="number" className={errors.size ? 'activ' : ''} placeholder='Size (MB)' {...register('size', {
                                    required: "Please enter your price!",
                                })} />
                            </>
                            : null
                    }
                    {
                        select === "Book" ?
                            <>
                                <div className="chiziq"></div>
                                <input type="number" className={errors.kg ? 'activ' : ''} placeholder='Weight (KG)' {...register('kg', {
                                    required: "Please enter your price!",
                                })} />
                            </>
                            : null
                    }
                    {
                        select === "Furniture" ?
                            <>
                                <div className="chiziq"></div>
                                <input type="number" className={errors.width ? 'activ' : ''} placeholder='Width' {...register('width', {
                                    required: "Please enter your price!",
                                })} />
                                <input type="number" className={errors.height ? 'activ' : ''} placeholder='Height' {...register('height', {
                                    required: "Please enter your price!",
                                })} />
                                <input type="number" className={errors.length ? 'activ' : ''} placeholder='Length' {...register('length', {
                                    required: "Please enter your price!",
                                })} />
                            </>
                            : null
                    }
                </form>
            </div>
        </>
    )
}

export default Form