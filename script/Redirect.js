  function redirectToEmail() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var email = "dishantelectronics@gmail.com"; // Replace with your actual email address

      if (isMobile) {
          // Redirect to Gmail app on mobile devices
          window.location.href = "mailto:" + email;
      } else {
          // Open default email client on desktop
          window.location.href = "mailto:" + email;
      }
  }
