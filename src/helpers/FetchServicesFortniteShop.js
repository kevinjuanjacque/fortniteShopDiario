

export const FetchServicesFortniteShop = async() => {

    const url='https://fortniteapi.io/v1/shop?lang=es';

    const resp=await fetch(url,{
            headers:new Headers({
                'Authorization':'71a28538-d14fe4c7-320b1dea-8b9adb2c'   
            })
        });
    const data=await resp.json()
    // const data=await resp.json();
    // console.log(data);
    // console.log(data)
    return data;



    
}
