(function() {
  'use strict';

  var $form = document.querySelector('[data-js="form-generator"]');
  var $result = document.querySelector('[data-js="result-url"]');
  var $phone = document.querySelector('[data-js="phone"]').value;
  var $message = document.querySelector('[data-js="message"]').value;
  var $generate = 'https://api.whatsapp.com/send?phone=+55' + $phone + '&text=' + $message;

  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    $result.innerHTML = $generate;
  }, false);

  // var $formGenerator = $('[data-js="form-generator"]');
  // var $phone = $('[data-js="phone"]').value.replace(/\D/g, '');
  // var $message = $('[data-js="message"]').value.replace(/\s/g, '%20');
  // var $url = 'https://api.whatsapp.com/send?phone=+55seunumerodetelefone&text=suamensagem'.replace(/seunumerodetelefone/g, $phone);

})();
