import { observer } from "mobx-react-lite";
import cartStore from "../store/cartStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cart = observer(() => {
  if (!cartStore.showCart) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "cart-overlay") {
      cartStore.toggleCart();
    }
  };

  return (
    <div
      id="cart-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white dark:bg-gray-800 w-96 p-6 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => cartStore.toggleCart()}
          className="absolute top-2 right-2 flex items-center justify-center w-10 h-10  bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Cart Header */}
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Shopping Cart
        </h2>
        {/* Cart Items */}
        {/* Cart Items */}
        <div className="overflow-y-auto max-h-96">
          {cartStore.cart.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">
              Your cart is empty.
            </p>
          ) : (
            <div>
              {cartStore.cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        {/* Cart Footer */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 mt-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Total: ${cartStore.totalPrice}
          </h3>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() =>
                alert(
                  "The function is not functioning, please wait for the next update =))"
                )
              }
              className="flex-grow bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition mr-4"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => cartStore.clearCart()}
              className="w-28 bg-red-500 text-white py-2 rounded hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500 transition"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

// Cart Quantity logic
const CartItem = observer(({ product }: { product: any }) => {
  const [quantityInput, setQuantityInput] = useState<string>(
    product.quantity.toString()
  );
  const [error, setError] = useState<string>("");

  const validateQuantity = (quantity: number) => {
    if (quantity < 1) return "Quantity must be at least 1.";
    if (quantity > 999) return "Quantity cannot exceed 999.";
    return "";
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setQuantityInput(value);
      setError("");
    } else {
      setError("Invalid input. Please enter a valid number.");
    }
  };

  const handleQuantityBlur = () => {
    const quantity = parseInt(quantityInput);
    if (isNaN(quantity)) {
      setError("Invalid input. Please enter a valid number.");
      setQuantityInput(product.quantity.toString());
    } else if (quantity === 0) {
      setError("Quantity cannot be 0 !");
      setQuantityInput("1");
      cartStore.updateQuantity(product.id, 1);
    } else {
      const validationError = validateQuantity(quantity);
      if (validationError) {
        setError(validationError);
        if (quantity > 999) {
          setQuantityInput("999");
          cartStore.updateQuantity(product.id, 999);
        } else {
          setQuantityInput(product.quantity.toString());
        }
      } else {
        cartStore.updateQuantity(product.id, quantity);
        setError("");
      }
    }
  };

  const handleQuantityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const quantity = parseInt(quantityInput);
      if (isNaN(quantity)) {
        setError("Invalid input. Please enter a valid number.");
        setQuantityInput(product.quantity.toString());
      } else if (quantity === 0) {
        setError("Quantity cannot be 0!");
        setQuantityInput("1");
        cartStore.updateQuantity(product.id, 1);
      } else {
        const validationError = validateQuantity(quantity);
        if (validationError) {
          setError(validationError);
          if (quantity > 999) {
            setQuantityInput("999");
            cartStore.updateQuantity(product.id, 999);
          } else {
            setQuantityInput(product.quantity.toString());
          }
        } else {
          cartStore.updateQuantity(product.id, quantity);
          setError("");
        }
      }
    }
  };

  const handleIncrease = () => {
    const newQuantity = product.quantity + 1;
    const validationError = validateQuantity(newQuantity);
    if (validationError) {
      setError(validationError);
    } else {
      cartStore.increaseQuantity(product.id);
      setQuantityInput(newQuantity.toString());
      setError("");
    }
  };

  const handleDecrease = () => {
    const newQuantity = product.quantity - 1;
    const validationError = validateQuantity(newQuantity);
    if (validationError) {
      setError(validationError);
    } else {
      cartStore.decreaseQuantity(product.id);
      setQuantityInput(newQuantity.toString());
      setError("");
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1 mx-4">
        <h3 className="text-gray-800 dark:text-white">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="h-8 w-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-l-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition"
          >
            -
          </button>

          {/* Quantity */}
          <input
            type="text"
            value={quantityInput}
            onChange={handleQuantityChange}
            onBlur={handleQuantityBlur}
            onKeyDown={handleQuantityKeyDown}
            className="w-12 text-center bg-transparent text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-2"
          />

          <button
            onClick={handleIncrease}
            className="h-8 w-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition"
          >
            +
          </button>
        </div>
        {error && (
          <p className="text-xs text-red-500 dark:text-red-400 mt-1">{error}</p>
        )}
      </div>
      <button
        onClick={() => cartStore.removeProduct(product.id)}
        className="w-10 h-10 flex items-center justify-center bg-red-500 dark:bg-red-400 text-white rounded-full hover:bg-red-600 dark:hover:bg-red-500 transition"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
});

export default Cart;
