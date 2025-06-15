const products = [
  { name: "Laptop", category: "electronics", price: 1200, inventoryCount: 10 },
  { name: "Jeans", category: "apparel", price: 50, inventoryCount: 30 },
  { name: "Milk", category: "groceries", price: 3, inventoryCount: 50 },
  { name: "Vacuum Cleaner", category: "household", price: 150, inventoryCount: 15 },
  { name: "Book", category: "misc", price: 20, inventoryCount: 40 }
];

const customerTypes = ["student", "senior", "regular"];

// Apply category discounts ONCE at the start
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

for (let i = 0; i < 3; i++) {
  let customerType = customerTypes[i];
  let additionalDiscount = 0;
  if (customerType === "student") {
    additionalDiscount = 0.05;
  } else if (customerType === "senior") {
    additionalDiscount = 0.07;
  }

  let totalCost = 0;
  // Track purchases for this customer
  let purchases = [];

  for (let product of products) {
    // Random amount between 0 and 5, but not more than inventoryCount
    let maxPurchase = Math.min(5, product.inventoryCount);
    let purchased = Math.floor(Math.random() * (maxPurchase + 1));
    if (purchased > 0) {
      totalCost += product.price * (1 - additionalDiscount) * purchased;
      product.inventoryCount -= purchased;
    }
    purchases.push({ name: product.name, purchased });
  }

  console.log(`Customer ${i + 1} (${customerType}): Total cost = $${totalCost.toFixed(2)}`);
  console.log("Items purchased:");
  for (let item of purchases) {
    console.log(`- ${item.name}: ${item.purchased}`);
  }

  // Log all products: use for...in for odd-indexed, Object.entries for even-indexed
  for (let j = 0; j < products.length; j++) {
    let product = products[j];
    if (j % 2 === 0) {
      console.log(`for...in breakdown (${product.name}):`);
      for (let key in product) {
        console.log(`${key}: ${product[key]}`);
      }
    } else {
      console.log(`Object.entries breakdown (${product.name}):`);
      for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
      }
    }
    console.log('---');
  }
}
