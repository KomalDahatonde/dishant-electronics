function initiateRazorpayPayment(price) {
   // Assuming you have the Razorpay API integration script loaded in your HTML

   // Create a Razorpay options object
   const options = {
       key: 'rzp_test_sJpyjaezMQUgYU',
       amount: price * 100,// amount in paise (100 paise = 1 INR)
           currency: 'INR',
           name: 'Dishant Electronics',
           description: 'Product Description',
           image: '/images/logo.png',
        //    order_id: '123456', // generate a unique order ID on your server
        handler: function (response) {
         alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
           },
           prefill: {
            //   name: 'John Doe',
            //   email: 'john@example.com',
            //   contact: '9876543210'
           },
           notes: {
              address: 'Your Address'
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