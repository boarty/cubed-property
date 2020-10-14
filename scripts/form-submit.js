window.addEventListener('load', function() {
  // Due to the way Javascript and node cloning works, it's necessary to programmatically
  // set the "selected" attribute.
  // https://stackoverflow.com/questions/44983149/javascript-clone-node-is-not-copying-all-values-from-cloned-to-new-object
  window.addEventListener('change', function(e) {
    if (e.target.nodeName === 'SELECT') {
      // Remove the "selected" attribute from all the options elements
      Object.keys(e.target.options).forEach(key => e.target.options[key].removeAttribute('selected'));

      // Assign the "selected" attribute to the actually selected option
      e.target.options[e.target.selectedIndex].setAttribute('selected', '');
    }
  });
});


function submitForm(e) {
  e.preventDefault();

  // Disable submit button
  e.submitter.setAttribute('disabled', '');

  // Get a clone copy of the whole HTML dom
  let html = document.querySelector('html').cloneNode(true);

  const formData = {
    salutation: html.querySelector('#user-salutation').value,
    firstName: html.querySelector('#user-first-name').value,
    lastName: html.querySelector('#user-last-name').value,
    eMail: html.querySelector('#user-email').value,
    birthDate: html.querySelector('#user-birth-date').value,
    gender: html.querySelector('#user-gender').value,
    address: html.querySelector('#property-address').value,
    roomNumber: html.querySelector('#property-room-number').value,
  };

  // Set values attributes to each element
  html.querySelectorAll('input').forEach(node => {
    if (node.getAttribute('type') === 'radio') {
      if (node.checked) {
        node.setAttribute('checked', 'checked');
      } else {
        node.removeAttribute('checked');
      }
    } else {
      //formValues.push({});
      node.setAttribute('value', node.value);
    }

    node.removeAttribute('placeholder');
  });

  html.querySelector('#main-menu').remove();
  let redirect = false;

  axios.post('https://europe-west2-cubed-1600512143678.cloudfunctions.net/formSubmit', {
  //axios.post('http://localhost:5001/cubed-1600512143678/europe-west2/formSubmit', {
    html: html.innerHTML,
    uploadedFiles: uploadedFiles,
    form: formData
  }).then(response => {
    return true;
  }).finally(() => {
    const params = encodeURI(
      `rentalAmount=${html.querySelector('#rental-amount').value}&` +
      `fullName=${formData.firstName} ${formData.lastName}&` +
      `email=${formData.eMail}&` +
      `address=${formData.address}&` +
      `roomNumber=${formData.roomNumber}`
    );

    // Free up some memory
    delete html;
    e.submitter.removeAttribute('disabled');

    window.location.href = `/payment.html?${params}`;
  });
}
