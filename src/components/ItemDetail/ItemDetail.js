

const ItemDetail = ({ name, brand,price, img, feature, memory }) => {
  return (
    <div className="w-96 m-auto py-4">
      <h1 className="capitalize rounded-lg font-semibold text-center h-8 bg-slate-800 text-white">{brand} {name} {memory}GB</h1>
      <img src={img} alt="Smartphone" />
      <h2 className="text-center text-2xl rounded-lg bg-slate-800 text-white">{price}</h2>
      <p className="bg-slate-800 text-white p-3 mt-3 rounded-lg">{feature}</p>
    </div>
  
  );
};

export default ItemDetail;