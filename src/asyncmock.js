const products = [
    { 
        id: '1', 
        brand:"samsung",
        name:"A33",
        price:"$90000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a336mzkfaro/gallery/ar-galaxy-a33-5g-a336-sm-a336mzkfaro-532010030?$650_519_PNG$", 
        memory: '128',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5          
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    },
    { 
        id: '2', 
        brand:"samsung",
        name:"A53",
        price:"$90000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-a53-5g-a536-sm-a536ezwaaro-531544722?$650_519_PNG$", 
        memory: '128',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    },
    {   
        id: '3', 
        brand:"samsung",
        name:"S22",
        price:"$90000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/uy/sm-s901ezgjltu/gallery/uy-galaxy-s22-s901-413439-sm-s901ezgjltu-531207833?$650_519_PNG$", 
        memory: '256',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    },
    {   
        id: '4', 
        brand:"xiaomi",
        name:"Redmi 9A",
        price:"$90000",
        img:"https://cdn-xiaomi.waugi.com.ar/745-thickbox_default/redmi-9a-2gb-ram-32gb-rom.jpg", 
        memory: '128',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    },
    {   
        id: '5',  
        brand:"xiaomi",
        name:"Note 10s",
        price:"$90000",
        img:"https://cdn-xiaomi.waugi.com.ar/713-thickbox_default/redmi-note-10s-6g-ram-64g-rom.jpg", 
        memory: '128',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    },
    {   
        id: '6', 
        brand:"xiaomi",
        name:"Note 11",
        price:"$90000",
        img:"https://cdn-xiaomi.waugi.com.ar/1418-home_default/redmi-note-11-pro-5g-6gb-ram-128gb-rom-graphite-gray-.jpg", 
        memory: '256',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    },
    {   
        id: '7', 
        brand:"apple",
        name:"Iphone 11",
        price:"$90000",
        img:"https://i.pinimg.com/originals/74/06/2a/74062a448bb65a9515a3ee4705b8f521.png", 
        memory: '128',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    }
    ,
    {   
        id: '8', 
        brand:"apple",
        name:"Iphone XS Max",
        price:"$90000",
        img:"https://static.wixstatic.com/media/7d0b48_e9f6779bb47b43e095ca9016353b6aee~mv2_d_1386_1408_s_2.png/v1/fill/w_498,h_506,al_c,usm_0.66_1.00_0.01/7d0b48_e9f6779bb47b43e095ca9016353b6aee~mv2_d_1386_1408_s_2.png", 
        memory: '256',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    }
    ,
    {   
        id: '9', 
        brand:"apple",
        name:"Iphone 13 Pro",
        price:"$90000",
        img:"https://storage.comprasmartphone.com/smartphones/apple-iphone-13-pro-max.png", 
        memory: '256',  
        feature:`
        PANTALLA: Super AMOLED de 6,4 pulgada - Full HD+ - Refresco a 90 Hz - Gorilla Glass 5 ///            
        PROCESADOR: Exynos 1280 - GPU Mali-G68 /// 
        MEMORIA RAM: 6/8 GB /// 
        CÁMARAS TRASERAS: 
        Principal: 48 megapíxeles f/1.8, OIS 
        Angular: 8 megapíxeles f/2.2 
        Profundidad: 2 megapíxeles f/2.4 
        Macro: 5 megapíxeles f/2.4 /// 
        CÁMARA FRONTAL: 13 megapíxeles f/2.2 /// 
        BATERÍA: 5.000 mAh - Carga rápida de 25 W /// 
        SISTEMA: Android 12 - One UI 4.1 ///      
        CONECTIVIDAD: 5G - WiFi 5 - Bluetooth 5.1 - GPS - USB tipo C ///       
        DIMENSIONES Y PESO 159,7 x 74 x 8,1 milímetros - 186 gramos` 
    }
  ]
  
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
  }
  
  export const getProductsByMemory = (memoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(product => product.memory === memoryId))
        }, 2000)
    })
  }
  
  
  export const getProductsByBrand = (brandId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.filter(product => product.brand === brandId ))
      } , 2000)
    })
  }
  
  export const getProductsById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 2000)
    })
  }