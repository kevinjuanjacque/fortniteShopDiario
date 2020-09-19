import React from 'react'
import { ItemCard } from '../ItemCard';
import '../../style/styleHome.css'

export const ProductosDestacados = ({data,title}) => {
    return (
        <div id="muestra" className="container ">
                <h1 className="display-4 text-center text-white">{title}</h1>
            
                <div id="cuerpoCard">
                    <div className="row flex-row flex-nowrap row-cols-2 row-cols-md-4 ">
                    {
                        data.map((item)=>{
                            return <ItemCard key={item.id} item={item}/>

                        })
                    }
                    </div>
                </div>
        </div>
    )
}
