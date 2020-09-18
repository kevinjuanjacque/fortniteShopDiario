import React from 'react'
import '../style/cardItem.css'
export const ItemCard = ({item}) => {
    return (
        
            <div className="col mb-4 mt-2 ">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div >
                        <img id='stack' src={item.full_background} className="card-img-top " alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
            </div>
        
    )
}
