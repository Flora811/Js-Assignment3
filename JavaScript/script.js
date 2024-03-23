 // Define the Pizza class
 class Pizza {
    constructor(size, crust, sauce, toppings, instructions) {
      this.size = size;
      this.crust = crust;
      this.sauce = sauce;
      this.toppings = toppings;
      this.instructions = instructions;
    }
  }

  // Function to handle pizza ordering
  function orderPizza() {
    const formData = new FormData(document.getElementById('pizzaForm'));
    const size = formData.get('size');
    const crust = formData.get('crust');
    const sauce = formData.get('sauce');
    const toppings = formData.getAll('toppings');
    const instructions = formData.get('instructions');

    // Create a new Pizza object
    const pizza = new Pizza(size, crust, sauce, toppings, instructions);

    // Display the order details
    displayOrderDetails(pizza);
  }

  // Function to display order details
  function displayOrderDetails(pizza) {
    const orderParagraph = document.createElement('p');
    orderParagraph.innerHTML = "<strong>Your pizza order details:</strong><br>" +
                                "<strong>Size:</strong> " + pizza.size + "<br>" +
                                "<strong>Crust:</strong> " + pizza.crust + "<br>" +
                                "<strong>Sauce:</strong> " + pizza.sauce + "<br>" +
                                "<strong>Toppings:</strong> " + pizza.toppings.join(", ") + "<br>" +
                                "<strong>Special Instructions:</strong> " + pizza.instructions;
    
    document.body.appendChild(orderParagraph);
  }
  // Add event listener for form submission
  document.getElementById("submitButton").addEventListener("click", orderPizza);
  var studentId = document.createElement('p');
  studentId.innerHTML="<bold>Student ID:200534094</bold> <br>";
  document.body.appendChild(studentId);