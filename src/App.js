import './App.css';
import CardProduct from './components/CardProduct/CardProduct';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'; 






function App() {
  
  return (
    <div className="App">
      <body className='bg-gray-100'>
      <NavBar/>
      <ItemListContainer/>
      {/********************************************** PRODUCTOS ******************************************/}
      <div className='flex flex-wrap'>
      <CardProduct brand="Samsung" name="A33" price="$90000" image="https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a336mzkfaro/gallery/ar-galaxy-a33-5g-a336-sm-a336mzkfaro-532010030?$650_519_PNG$"/>
      <CardProduct brand="Samsung" name="A53" price="$90000" image="https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-a53-5g-a536-sm-a536ezwaaro-531544722?$650_519_PNG$" />
      <CardProduct brand="Samsung" name="S22" price="$130000" image="https://images.samsung.com/is/image/samsung/p6pim/uy/sm-s901ezgjltu/gallery/uy-galaxy-s22-s901-413439-sm-s901ezgjltu-531207833?$650_519_PNG$"/>
      <CardProduct brand="Xiaomi" name="Redmi 9A" price="$90000" image="https://cdn-xiaomi.waugi.com.ar/745-thickbox_default/redmi-9a-2gb-ram-32gb-rom.jpg" />
      <CardProduct brand="Xiaomi" name="Note 10s" price="$90000" image="https://cdn-xiaomi.waugi.com.ar/713-thickbox_default/redmi-note-10s-6g-ram-64g-rom.jpg" />
      <CardProduct brand="Xiaomi" name="Note 11 Pro" price="$90000" image="https://cdn-xiaomi.waugi.com.ar/1418-home_default/redmi-note-11-pro-5g-6gb-ram-128gb-rom-graphite-gray-.jpg" />
      <CardProduct brand="Apple" name="Iphone 11" price="$90000" image="https://i.pinimg.com/originals/74/06/2a/74062a448bb65a9515a3ee4705b8f521.png" />  
      <CardProduct brand="Apple" name="Iphone XS Max" price="$90000" image="https://static.wixstatic.com/media/7d0b48_e9f6779bb47b43e095ca9016353b6aee~mv2_d_1386_1408_s_2.png/v1/fill/w_498,h_506,al_c,usm_0.66_1.00_0.01/7d0b48_e9f6779bb47b43e095ca9016353b6aee~mv2_d_1386_1408_s_2.png" />  
      <CardProduct brand="Apple" name="Iphone 13 Pro" price="$90000" image="https://storage.comprasmartphone.com/smartphones/apple-iphone-13-pro-max.png" />
      </div>
      </body>
    </div>
  );
}

export default App;
