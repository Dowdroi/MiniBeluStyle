import { observer } from "mobx-react-lite";
import cartStore from "../store/cartStore";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductList = observer(() => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product A",
      price: 100,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 2,
      name: "Product B",
      price: 200,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 3,
      name: "Product C",
      price: 300,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 4,
      name: "Product D",
      price: 150,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 5,
      name: "Product E",
      price: 250,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 6,
      name: "Product F",
      price: 350,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 7,
      name: "Product G",
      price: 120,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
    {
      id: 8,
      name: "Product H",
      price: 180,
      image: "https://i.imgur.com/fMXyhHv.png",
    },
  ];

  const addToCart = (product: Product) => {
    cartStore.addProduct(product);
  };

  return (
    <section id="product-list" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProductList;
