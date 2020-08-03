(()=>{
  'use strict';

  var $form = $('[data-js="form-generator"]');
  var $result = $('[data-js="result-url"]');
  var $phone = $('[data-js="phone"]');
  var $message = $('[data-js="message"]');
  var $buttonCopy = $('[data-js="button-copy"]');
  var $url = 'https://api.whatsapp.com/send?phone=+55';

  $form.addEventListener('submit', (e)=>{
    e.preventDefault();
    $result.value = getUrl();
  }, false);

  $buttonCopy.addEventListener('click', ()=>{
    $result.select();
    $result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("URL Copiada com sucesso!");
  });

  function $(a) {
    return document.querySelector(a);
  };

  function getUrl() {
    return 'https://api.whatsapp.com/send?phone=+55'+$phone.value.replace(/\D/g, '')+'&text='+$message.value.replace(/\s/g, '%20');
  };

})();