let restaurant = "";
let total = 0;

const menus = {
  Raju: {
    "Open me": 0,
    "Zinger burger": 300,
    "Double zinger": 450,
    "Super zinger": 400,
    "Fillet": 400,
    "Fillet double": 400,
    "Breast Supreme": 400,
    "Double breast supreme": 400,
    "Pizza Sandwich": 400,
    "Cheese Sandwich": 400,
    "Club Sandwich": 400,
    "Campus Sandwich": 400,
    "Chicken Sandwich": 400,
    "Zinger Sandwich": 400,
    "Zinger roll": 400,
    "Paratha roll": 400,
    "Double Zinger roll": 400,
    "Chicken roll": 400,
    "Sausage roll": 400,
    "Sharwma": 400,
    "Zinger Sharwma": 400,
    "Pizza Sharwma": 400,
    "Chicken tikka pizza S": 400,
    "Chicken tikka pizza M": 400,
    "Chicken tikka pizza L": 400,
    "Chicken fagita pizza S": 400,
    "Chicken fagita pizza M": 400,
    "Chicken fagita pizza L": 400
  },
  Ayan: {
    "Zinger burger": 300,
    "Double zinger": 450,
    "Pizza Sandwich": 400,
    "Club Sandwich": 400,
    "Zinger Sandwich": 400,
    "Zinger roll": 400,
    "Paratha roll": 400,
    "Double Zinger roll": 400,
    "Chicken roll": 400,
    "Sharwma": 400,
    "Zinger Sharwma": 400,
    "Pizza Sharwma": 400,
    "Chicken tikka pizza S": 400,
    "Chicken tikka pizza M": 400,
    "Chicken tikka pizza L": 400,
    "Chicken fagita pizza S": 400,
    "Chicken fagita pizza M": 400,
    "Chicken fagita pizza L": 400
  },
  HNS: {
    "Crown Pizza M": 700,
    "Crown Pizza L": 1200,
    "Crown Pizza XL": 1500,
  },
};



// Get DOM elements
const restaurantSelect = document.getElementById("restaurant");
const menuItemsSelect = document.getElementById("menu-items"); // Get the new dropdown

// Event listener for restaurant selection
restaurantSelect.addEventListener("change", function () {
  restaurant = this.value;
  updateMenuDropdown(restaurant);

  // Disable the restaurant dropdown
  this.disabled = true;
});

// Update Menu Dropdown
function updateMenuDropdown(restaurant) {
  menuItemsSelect.innerHTML = ""; // Clear previous menu items

  if (menus[restaurant]) {
    const menu = menus[restaurant];
    for (const item in menu) {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item + " ($" + menu[item] + ")"; // Show price
      menuItemsSelect.appendChild(option);
    }
  }
}





// Add to Order (Slightly Modified)
menuItemsSelect.addEventListener("change", function () {
  const selectedItem = this.value;
  if (selectedItem) { // Prevent adding if no item is picked
    const orderItem = document.createElement("p");
    orderItem.textContent = "You ordered: " + selectedItem;
    orderSummaryDiv.appendChild(orderItem);
  }
});

const orderSummaryDiv = document.getElementById("order-summary");
const totalAmountDiv = document.getElementById("total-amount");


// Initialize the total display
totalAmountDiv.textContent = "Total: PKR" + total;

// Update total and display
menuItemsSelect.addEventListener("change", function () {
  const selectedItem = this.value;
  if (selectedItem) {
    // ... Add item to order summary ...



    // Update total (Assuming menu items have prices) 
    const price = menus[restaurant][selectedItem]; // Adjust if your data structure is different
    total += price;
    totalAmountDiv.textContent = "Total: PKR" + total;
  }
});

 