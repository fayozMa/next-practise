import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");
  const data = await request.json();
  return data;
};
async function Products() {
  const { products } = await getData();
  console.log(products);
  return (
    <div className="mx-auto max-w-[1200px] flex flex-wrap gap-5 mt-10">
      {products.map((product) => {
        return (
          <Link href={"/singleProduct/" + product.id} key={product.id}>
            <div className="card bg-white w-96 shadow-xl text-black h-[600px]">
              <figure className="bg-slate-500 h-[280px]">
                <img
                  src={product.thumbnail}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end flex items-center ">
                  <p className="text-2xl font-bold">{ "$" + product.price}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
