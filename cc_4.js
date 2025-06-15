const products = [
  { name: "Laptop", category: "electronics", price: 1200, inventoryCount: 10 },
  { name: "Jeans", category: "apparel", price: 50, inventoryCount: 30 },
  { name: "Milk", category: "groceries", price: 3, inventoryCount: 50 },
  { name: "Vacuum Cleaner", category: "household", price: 150, inventoryCount: 15 },
  { name: "Book", category: "misc", price: 20, inventoryCount: 40 }
];
for (let product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      break; // No discount applied
  }
}
const customerTypes = ["student", "senior", "regular"];
for (let i = 0; i < 3; i++) {
  let customerType = customerTypes[i];
  let additionalDiscount = 0;
  if (customerType === "student") {
    additionalDiscount = 0.05; // 5% extra off
  } else if (customerType === "senior") {
    additionalDiscount = 0.07; // 7% extra off
  }
  for (let i = 1; i <= 3; i++) {
    let totalCost = 0;
    
    for (let product of products) {
      totalCost += product.price * (1 - additionalDiscount);
      product.inventoryCount--; // Reduce inventory count
    }
    
    console.log(`Customer ${i}: Total cost = $${totalCost.toFixed(2)}`);
  }
}
let sampleProduct = products[0]; // Example: picking the first product
for (let key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}
for (let [key, value] of Object.entries(sampleProduct)) {
  console.log(`${key}: ${value}`);
}
