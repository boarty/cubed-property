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

  axios.post('https://europe-west2-cubed-1600512143678.cloudfunctions.net/generatePdf', {
  //axios.post('http://localhost:5001/cubed-1600512143678/europe-west2/generatePdf', {
    html: html.innerHTML,
    uploadedFiles: uploadedFiles,
    fullName: html.querySelector('#user-first-name').value + '_' + html.querySelector('#user-last-name').value
  }).then(response => {
    return true;
  }).finally(() => {
    // Free up some memory
    delete html;
    e.submitter.removeAttribute('disabled');
  });
}
