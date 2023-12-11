function validatefirstName() {
    const firstName = document.getElementById('firstName').value;
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(firstName)) {
      alert('Invalid First Name');
    }
  }

  function validatelastName() {
    const lastName = document.getElementById('lastName').value;
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(lastName)) {
      alert('Invalid Last Name');
    }
  }

  function validateemail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9@.]{1,30}$/;
    if (!emailRegex.test(email)) {
      alert('Invalid Email');
    }
  }

  function validatemobileNumber() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    const numberRegex = /^\d{1,10}$/;
    if (!numberRegex.test(mobileNumber)) {
      alert('Invalid Mobile Number');
    }
  }

  function validatecity() {
    const city = document.getElementById('city').value;
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(city)) {
      alert('Invalid City');
    }
  }

  function validatepincode() {
    const pincode = document.getElementById('pincode').value;
    const numberRegex = /^\d{1,6}$/;
    if (!numberRegex.test(pincode)) {
      alert('Invalid Pincode');
    }
  }

  function validatestate() {
    const state = document.getElementById('state').value;
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(state)) {
      alert('Invalid State');
    }
  }

  function validatecountry() {
    const country = document.getElementById('country').value;
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(country)) {
      alert('Invalid Country');
    }
  }