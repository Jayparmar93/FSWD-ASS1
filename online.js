let cart = [];
const addProduct = (productName, price, quantity) => {
  if (price < 0 || quantity < 1) {
    console.error("Price must be positive and quantity must be at least 1.");
    return;
  }
  cart.push({ productName, price, quantity });
};

const calculateTotal = () => {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};

const removeProduct = (productName) => {
  cart = cart.filter(product => product.productName !== productName);
};

const logProductDetails = () => {
  if (cart.length === 0) {
    console.log("Cart is empty.");
    return;
  }
  cart.forEach(({ productName, price, quantity }) => {
    console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
  });
};

const displayCartSummary = () => {
  if (cart.length === 0) {
    console.log("Cart is empty.");
    return;
  }
  console.log("Cart Summary:");
  cart.forEach(({ productName, price, quantity }) => {
    console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
  });
  console.log(`Total Cost: $${calculateTotal().toFixed(2)}`);
};

addProduct("Laptop", 1200, 1);
addProduct("Mouse", 25, 2);
addProduct("Keyboard", 75, 1);
addProduct("Monitor", 300, 1);

console.log("\nCart Details:");
logProductDetails();

console.log("\nAfter Removing 'Mouse':");
removeProduct("Mouse");
logProductDetails();

console.log("\nCart Summary:");
displayCartSummary();
