const products = [
  { name: "Laptop", category: "electronics", price: 1200, inventoryCount: 10 },
  { name: "Jeans", category: "apparel", price: 50, inventoryCount: 30 },
  { name: "Milk", category: "groceries", price: 3, inventoryCount: 50 },
  { name: "Vacuum Cleaner", category: "household", price: 150, inventoryCount: 15 },
  { name: "Book", category: "misc", price: 20, inventoryCount: 40 }
];

const customerTypes = ["student", "senior", "regular"];

// Store original prices for reference
const originalPrices = {
  "Laptop": 1200,
  "Jeans": 50,
  "Milk": 3,
  "Vacuum Cleaner": 150,
  "Book": 20
};

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

// Prepare output container
let output = "";

for (let i = 0; i < 3; i++) {
  let customerType = customerTypes[i];
  let additionalDiscount = 0;
  if (customerType === "student") {
    additionalDiscount = 0.05;
  } else if (customerType === "senior") {
    additionalDiscount = 0.07;
  }

  let totalBefore = 0;
  let totalDiscount = 0;
  let totalAfter = 0;

  let purchases = [];

  for (let product of products) {
    let maxPurchase = Math.min(5, product.inventoryCount);
    let purchased = Math.floor(Math.random() * (maxPurchase + 1));
    if (purchased > 0) {
      let originalPrice = originalPrices[product.name];
      let priceBeforeDiscounts = originalPrice * purchased;
      let priceAfterAllDiscounts = product.price * (1 - additionalDiscount) * purchased;
      totalBefore += priceBeforeDiscounts;
      totalAfter += priceAfterAllDiscounts;
      totalDiscount += priceBeforeDiscounts - priceAfterAllDiscounts;
    }
    purchases.push({
      name: product.name,
      purchased: purchased,
      inventory: product.inventoryCount
    });
  }

  output += `<h3>Customer ${i + 1} (${customerType})</h3>`;
  output += `<p>Total price: $${totalBefore.toFixed(2)}</p>`;
  output += `<p>Discounts: $${totalDiscount.toFixed(2)}</p>`;
  output += `<p>Price after discounts: $${totalAfter.toFixed(2)}</p>`;
  output += `<ul>`;
  for (let item of purchases) {
    output += `<li>${item.name}: purchased ${item.purchased}, inventory remaining: ${item.inventory}</li>`;
  }
  output += `</ul>`;
}

// Display on UI
document.getElementById("output").innerHTML = output;
