const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products" + id);
  const data = await  request.json();
  return data;
};
async function Product({ params }) {
  const product = await getData(params.id)
  return (
    <h1>{product.title}</h1>
  );
}

export default Product;
