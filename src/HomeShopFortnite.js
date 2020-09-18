import React from 'react'
import { UseFetchShops } from './hook/useFetchShops'
import './style/styleHome.css'
import { ItemCard } from './components/ItemCard';

export const HomeShopFortnite = () => {

    const { data,loading } = UseFetchShops();

    return (
        <>
            
            <nav id="navegador" className="navbar navbar-dark ">
                <span className="navbar-brand mb-0 h1">TIENDA DEL DIA FORTNITE</span>
            </nav>

            

            <div className="container ">
                <h1 class="display-3 text-center">PRODUCTOS DESTACADOS</h1>
                {loading && (
                    <div className="spinner-border mt-5" role="status">
                        <span className="sr-only ">Loading...</span>
                    </div>
                )}
                <div className="row row-cols-1 row-cols-md-2">
                {
                    data.map((item)=>{

                        return <ItemCard key={item.id} item={item}/>

                    })
                }
                </div>
            </div>
        </>
    )
}
