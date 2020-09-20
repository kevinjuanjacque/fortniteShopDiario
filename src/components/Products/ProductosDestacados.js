import React, { useRef } from 'react'
import { ItemCard } from '../ItemCard';
import '../../style/styleHome.css'

export const ProductosDestacados = ({data,title}) => {
    const BodyCard = useRef(null)
    return (
        <>
        <div className="row row-cols-9 ml-2 mr-2">
            <button className="btn btn-light col m-2"
            onClick={()=>{
                const element = BodyCard.current;
                element.scrollTo(element.scrollLeft-120.0,0);
             }}
            
            > {'<'} </button>

                <div id="muestra" className="shadow col-10 m-2 " >
                <h1 className="display-4 text-center text-white">{title}</h1>
                    
                        <div id="cuerpoCard" ref={BodyCard} >
                            
                            <div id="targetas" 
                            className=" row flex-row flex-nowrap  row-cols-md-4 ">
                            {
                                data.map((item)=>{
                                    return <ItemCard key={item.id} item={item}/>

                                })
                            }
                            </div>
                        </div>
                </div>

            <button onClick={()=>{
                const element = BodyCard.current;
                element.scrollTo(element.scrollLeft+120.0,0);
             }} className="btn btn-light col m-2 mr-2"> {'>'} </button>
        </div>
        </>
    )
}
