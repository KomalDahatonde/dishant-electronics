        var options = {
           key: 'rzp_test_sJpyjaezMQUgYU',
           amount: 500000, // amount in paise (100 paise = 1 INR)
           currency: 'INR',
           name: 'Dishant Electronics',
           description: 'Product Description',
           image: '/images/logo.png',
        //    order_id: '123456', // generate a unique order ID on your server
           handler: function (response) {
              // Handle the success response
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
              color: '#F37254'
           }
        };
     
        var rzp = new Razorpay(options);
     
        document.getElementById('rzp-button').onclick = function () {
           rzp.open();
        };