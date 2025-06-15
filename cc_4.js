const originalProducts = [
  { name: "Laptop", category: "electronics", price: 1200, inventoryCount: 10 },
  { name: "Jeans", category: "apparel", price: 50, inventoryCount: 30 },
  { name: "Milk", category: "groceries", price: 3, inventoryCount: 50 },
  { name: "Vacuum Cleaner", category: "household", price: 150, inventoryCount: 15 },
  { name: "Book", category: "misc", price: 20, inventoryCount: 40 }
];

const customerTypes = ["student", "senior", "regular"];

for (let i = 0; i < 3; i++) {
  // Deep copy products for each customer
  let products = originalProducts.map(p => ({ ...p }));

  // Apply category discounts
  for (let product of products) {
    switch (product.category) {
      case "electronics":
        product.price *= 0.8;
        break;
      case "apparel":
        product.price *= 0.85;
        break;
      case "groceries":
      case "household":
        product.price *= 0.9;
        break;
      default:
        break;
    }
  }

  // Set customer type and additional discount
  let customerType = customerTypes[i];
  let additionalDiscount = 0;
  if (customerType === "student") {
    additionalDiscount = 0.05;
  } else if (customerType === "senior") {
    additionalDiscount = 0.07;
  }

  // Calculate total and reduce inventory
  let totalCost = 0;
  for (let product of products) {
    totalCost += product.price * (1 - additionalDiscount);
    product.inventoryCount--;
  }

  console.log(`Customer ${i + 1} (${customerType}): Total cost = $${totalCost.toFixed(2)}`);

  // Step 6 & 7: Log all products' info after discounts and inventory update
  for (let product of products) {
    // for...in loop
    for (let key in product) {
      console.log(`${key}: ${product[key]}`);
    }
    // Object.entries with destructuring
    for (let [key, value] of Object.entries(product)) {
      console.log(`${key}: ${value}`);
    }
    console.log('---');
  }
}
