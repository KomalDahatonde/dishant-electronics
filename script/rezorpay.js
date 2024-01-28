
// Get Product name 
const productName = document.getElementById('pname').innerText;

function initiateRazorpayPayment(price) {

   const UserAddress = document.getElementById('address').value;

   // Assuming you have the Razorpay API integration script loaded in your HTML
  
   // Create a Razorpay options object
   const options = {
       key: 'rzp_test_sJpyjaezMQUgYU',
       amount: price * 1000*2,// amount in paise (100 paise = 1 INR)
           currency: 'INR',
           name: 'Dishant Electronics',
           description: productName,
           image: '/images/logo.png',
           appname: 'Dishant Electronics', // Add your app name here
           appid: '1.0',
         //   order_id: '' , // generate a unique order ID on your server
        handler: function (response) {
         redirectToMyOrder(response, productName, price);
         alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
           },
           prefill: {
              name: 'John Doe',
              email: 'john@example.com',
              contact: '9265952630'
           },
           notes: {
              address: UserAddress
           },  
           

           theme: {
              color: '#007bff'
           }
          
        };
     
      //   var rzp = new Razorpay(options);
     
      //   document.getElementById('rzp-button').onclick = function () {
      //      rzp.open();
      //   };

      const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();

      }

      var payment_status = 100;

      function redirectToMyOrder(response, productName, price, payment_status) {
         
         // Save order details in localStorage for retrieval on MyOrder.html
         const orderDetails = {
             orderId: response.razorpay_payment_id,
             productName: productName,
             price: price,
             payment_status: payment_status,
         };
         // existingOrders.push(newOrder);
         // Store order details in localStorage
         localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
     
         // Redirect to MyOrder.html
         window.location.href = 'MyOrders.html';
}