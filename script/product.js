// Dialogue Box 
function closeDialog() {
    var dialog = document.getElementById('userDialog');
    dialog.style.display = 'none';
}

    function openUserDialog() {
      document.getElementById('userDialog').style.display = 'block';
    }

    function submitUserInfo() {
      var username = document.getElementById('address').value;
    //   var email = document.getElementById('email').value;

      // You can perform actions with the user information here.
      // For now, let's just log the information.
    //   console.log('Username: ' + username);
    //   console.log('Email: ' + email);

      // Close the dialog box
      document.getElementById('userDialog').style.display = 'none';
    }
//   Dialogue Box End
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("productDropdown");
    const selectedValueParagraph = document.getElementById("selectedValue");

    // Event listener for the dropdown change event
    dropdown.addEventListener("change", function () {
        const selectedProduct = dropdown.value;
        selectedValueParagraph.textContent = "₹" + selectedProduct;
    });

    // Event listener for the Buy Now button
    const buyNowButton = document.getElementById("buyNowButton");
    buyNowButton.addEventListener("click", function () {
        const selectedProduct = dropdown.value;
        // Call a function from razorpay.js to initiate payment
        initiateRazorpayPayment(selectedProduct);
    });
});
