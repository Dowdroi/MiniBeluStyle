import { makeAutoObservable } from "mobx";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

class CartStore {
  cart: Product[] = [];
  showCart = false;

  constructor() {
    makeAutoObservable(this);
    this.loadCartFromLocalStorage();
  }

  // Show cart
  toggleCart() {
    this.showCart = !this.showCart;
  }

  // Add Product
  addProduct(product: Product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      if ((existingProduct.quantity || 0) < 999) {
        existingProduct.quantity = Math.min(
          (existingProduct.quantity || 0) + 1,
          999
        );
      }
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCartToLocalStorage();
  }

  // Remove Product
  removeProduct(productId: number) {
    this.cart = this.cart.filter((product) => product.id !== productId);
    this.saveCartToLocalStorage();
  }

  // Update Product Quantity
  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find((item) => item.id === productId);
    if (product) {
      product.quantity = quantity;
      this.saveCartToLocalStorage();
    }
  }

  increaseQuantity(productId: number) {
    const product = this.cart.find((item) => item.id === productId);
    if (product && product.quantity! < 999) {
      product.quantity = Math.min(product.quantity! + 1, 999);
      this.saveCartToLocalStorage();
    }
  }

  decreaseQuantity(productId: number) {
    const product = this.cart.find((item) => item.id === productId);
    if (product) {
      if (product.quantity! > 1) {
        product.quantity! -= 1;
      } else {
        this.removeProduct(product.id);
      }
      this.saveCartToLocalStorage();
    }
  }

  // Clear all items in the cart
  clearCart() {
    this.cart = [];
  }

  // Save cart to localStorage
  saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // Load cart from localStorage
  loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  // TotalPrice
  get totalPrice() {
    return this.cart.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  }

  // TotalItems
  get totalItems() {
    return this.cart.reduce(
      (total, product) => total + (product.quantity || 1),
      0
    );
  }
}

const cartStore = new CartStore();
export default cartStore;
