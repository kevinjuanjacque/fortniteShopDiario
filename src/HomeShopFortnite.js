import React from 'react'
import { UseFetchShops } from './hook/useFetchShops'
import './style/styleHome.css'
import { ProductosDestacados } from './components/Products/ProductosDestacados';

export const HomeShopFortnite = () => {

    const { data,loading } = UseFetchShops();

    return (
        <div >
            
            <nav id="navegador" className="navbar navbar-dark ">
                <span className="navbar-brand mb-0 h1">TIENDA DEL DIA FORTNITE</span>
            </nav>

            
            {
                (loading) ? (
                        <div className="spinner-border mt-5" role="status">
                            <span className="sr-only ">Loading...</span>
                        </div>
                ):
                    (
                        <div>
                            <ProductosDestacados data={data.featured} title="Productos destacados" />
                        <ProductosDestacados data={data.daily} title="Productos diarios" />
                        </div>
                    )
            }
            
        </div>
    )
}
