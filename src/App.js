import "./App.css";
import CardProduct from "./components/CardProduct/CardProduct";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <body className="bg-gray-100">
        <NavBar />
        {/********************************************** PRODUCTOS ******************************************/}
        <div className="flex flex-wrap">
          <CardProduct
            brand="Smartphone"
            name="Samsung A33"
            price="$99000"
            image="https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a336mzkfaro/gallery/ar-galaxy-a33-5g-a336-sm-a336mzkfaro-532010030?$650_519_PNG$"
          />
          <CardProduct
            brand="Smartphone"
            name="Samsung A53"
            price="$119000"
            image="https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-a53-5g-a536-sm-a536ezwaaro-531544722?$650_519_PNG$"
          />
          <CardProduct
            brand="Smartphone"
            name="Samsung S22"
            price="$180000"
            image="https://images.samsung.com/is/image/samsung/p6pim/uy/sm-s901ezgjltu/gallery/uy-galaxy-s22-s901-413439-sm-s901ezgjltu-531207833?$650_519_PNG$"
          />
        </div>
        <ItemListContainer />
      </body>
    </div>
  );
}

export default App;
