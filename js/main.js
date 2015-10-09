document.addEventListener("DOMContentLoaded", function () {

  var Helper = {
        validateEmail: function (email) {
          var re = /\S+@\S+\.\S+/;
          return re.test(email);
        }
      },
      // Form fields
      formObject = $("#launch-form"),
      emailField = $("#emailAddress")
      ;

  // Parse initialization
  Parse.initialize("35a5dKIoLmZWB03qKDycgxuVkDByucBCb9bv9d6A", "58IsEe38o4znqQP3nOe99BFcTP3j7csmDp78XcNE");
  var EmailCollector = Parse.Object.extend("EmailCollector")

  formObject.submit(function (e) {
    // Submitting the form
    e.preventDefault();

    var email = emailField.val();
    if (Helper.validateEmail(email)) {

      var parseEmailObject = new EmailCollector();

      parseEmailObject.save({email: email}).then(
        function successCallback (object) {
          //console.log("yay! it worked", object);
          emailField.val('');
          alert('Thank you for taking interest in Doclette!');
        }, function failCallback () {
          alert('Sorry, there was a problem on our end :s. Please try hitting that button again!');
        });

    } else {
      // Invalid email - notify user
      alert('Looks like you have typed in a wrong email address: (' + email + ') . Please correct it and try again!');
    }
  });


});
