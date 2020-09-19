import  { useState, useEffect } from 'react'
import { FetchServicesFortniteShop } from '../helpers/FetchServicesFortniteShop';

export const UseFetchShops = () => {
    const [Data, setData] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        FetchServicesFortniteShop().then((service)=>{
            // console.log(service)
            setData({
                data:service,
                loading:false
            });

        });

    },[]);

    return Data;
}
