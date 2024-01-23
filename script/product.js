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
