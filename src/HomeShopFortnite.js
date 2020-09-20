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
                        <div >
                            
                            {/* <div className="row row-cols-9 ml-2 mr-2">
                                <button className="btn btn-light col m-2"> {'<'} </button> */}
                                <ProductosDestacados className="col-6 m-2" data={data.featured} title="Productos destacados" />
                                {/* <button className="btn btn-light col m-2 mr-2"> {'>'} </button>
                            </div> */}
                            
                            <ProductosDestacados data={data.daily} title="Productos diarios" />

                            <ProductosDestacados data={data.specialFeatured} title="Productos diarios destacados" />
                                
                            
                        </div>
                    )
            }
            
        </div>
    )
}
