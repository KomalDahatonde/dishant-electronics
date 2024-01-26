// Get Product name 
const productName = document.getElementById('pname').innerText;

// Order ID
function generateOrderId() {
   // You can use a library like UUID to generate a unique ID
   // Example using a simple timestamp-based approach
   const timestamp = new Date().getTime();
   const randomValue = Math.floor(Math.random() * 1000);
   const orderId = `${timestamp}${randomValue}`;
   return orderId;
 }

function initiateRazorpayPayment(price) {

   const UserAddress = document.getElementById('address').value;

   // Assuming you have the Razorpay API integration script loaded in your HTML
  
   // Create a Razorpay options object
   const options = {
       key: 'rzp_test_sJpyjaezMQUgYU',
       amount: price * 100,// amount in paise (100 paise = 1 INR)
           currency: 'INR',
           name: 'Dishant Electronics',
           description: productName,
           image: '/images/logo.png',
           appname: 'Dishant Electronics', // Add your app name here
           appid: '1.0',
           order_id: generateOrderId(), // generate a unique order ID on your server
        handler: function (response) {
         alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
           },
           prefill: {
            //   name: 'John Doe',
            //   email: 'john@example.com',
            //   contact: '9876543210'
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