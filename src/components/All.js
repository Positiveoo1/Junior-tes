import React from 'react'
import { contextBaza } from '../context/context'

const All = () => {
    const { checkboxFun, date } = React.useContext(contextBaza)

    return (
        <>
            <div className="cards">
                {
                    date.length === 0 ? <h1>Not found</h1> :
                        date.map((item, i) => (
                            <div className="card" key={i} onClick={() => checkboxFun(item)}>
                                <input type="checkbox" checked={item.checked} />
                                <h3>{item.sku}</h3>
                                <h3>{item.select}</h3>
                                <h3>{item.price} $</h3>
                                {
                                    item.select === "DVD" ? <h3>Size: {item.size} MB</h3> : false
                                }
                                {
                                    item.select === "Book" ? <h3>Weight: {item.kg} KG</h3> : null
                                }
                                {
                                    item.select === "Furniture" ? <h3>Dimension: {item.width}x{item.height}x{item.length}</h3> : null
                                }
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default All