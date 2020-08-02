function buttonCopy() {
  var copyUrl = document.querySelector('[data-js="result-url"]');
  copyUrl.select();
  copyUrl.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("URL Copiada com sucesso!");
}

(function() {
  'use strict';

  var $form = $('[data-js="form-generator"]');
  var $result = $('[data-js="result-url"]');
  var $phone = $('[data-js="phone"]');
  var $message = $('[data-js="message"]');
  var $url = 'https://api.whatsapp.com/send?phone=+55';

  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    $result.value = getUrl();
  }, false);

  function $(a) {
    return document.querySelector(a);
  }

  function getUrl() {
    return 'https://api.whatsapp.com/send?phone=+55'+$phone.value.replace(/\D/g, '')+'&text='+$message.value.replace(/\s/g, '%20');
  }

})(window.DOM);