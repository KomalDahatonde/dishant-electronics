function sendEmail() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;



    // Replace 'your-email@example.com' with the actual email address where you want to receive the form data

    var toEmail = 'dishantelectronics@gmail.com';
    // var toEmail = 'dhavalpatel9526@gmail.com';

    // Compose the email body
    var subject = 'Quick Enquiry Form Submission';
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nNumber: ' + phone + '\nMessage: ' + message;

    // Create a mailto link to open the user's default email client
    var mailtoLink = 'mailto:' + toEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the default email client with the pre-filled email details
    window.location.href = mailtoLink;
}