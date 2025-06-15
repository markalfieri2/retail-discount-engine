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
  let purchases = [];

  for (let product of products) {
    let maxPurchase = Math.min(5, product.inventoryCount);
    let purchased = Math.floor(Math.random() * (maxPurchase + 1));
    if (purchased > 0) {
      totalCost += product.price * (1 - additionalDiscount) * purchased;
      product.inventoryCount -= purchased;
    }
    purchases.push({ name: product.name, purchased });
  }

  // Clean output: only show summary and items purchased
  console.log(`Customer ${i + 1} (${customerType}): Total cost = $${totalCost.toFixed(2)}`);
  console.log("Items purchased:");
  for (let item of purchases) {
    console.log(`- ${item.name}: ${item.purchased}`);
  }
}
