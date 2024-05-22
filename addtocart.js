document.addEventListener('DOMContentLoaded', function () {
    // Select the text input field
    var textInput = document.getElementById('textInput');
  
    // Add event listeners to each dropdown menu
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function (event) {
        // Get the selected item text
        var selectedText = event.target.textContent.trim();
  
        // Find the corresponding dropdown button and update its text
        var dropdownButton = this.previousElementSibling;
        dropdownButton.textContent = selectedText;
      });
    });
  
    // Add an event listener to the text input field
    textInput.addEventListener('input', function () {
      // Limit the input to 30 characters
      if (this.value.length > 30) {
        this.value = this.value.substring(0, 30);
      }
    });
  
    // Add an event listener to the "Add to Cart" button
    var addToCartButton = document.getElementById('addToCartButton');
    addToCartButton.addEventListener('click', function () {
      // Capture the selected options
      var size = document.getElementById('sizesDropdownToggle').textContent.trim();
      var topping = document.getElementById('toppingsDropdownToggle').textContent.trim();
      var filling = document.getElementById('fillingsDropdownToggle').textContent.trim();
      var dedicationText = document.getElementById('textInput').value.trim();
  
      // Create an object representing the item
      var newItem = {
        size: size,
        topping: topping,
        filling: filling,
        dedicationText: dedicationText
      };
  
      // Add the item to the cart in localStorage
      addToCart(newItem);
    });
  
    // Function to add item to the cart in localStorage
    function addToCart(item) {
      // Get existing cart items from localStorage or initialize an empty array
      var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
      // Add the new item to the cart
      cartItems.push(item);
  
      // Store the updated cart items back in localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  });
  