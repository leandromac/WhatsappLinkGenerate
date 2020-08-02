function buttonCopy() {
  var copyText = document.querySelector('[data-js="result-url"]');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("URL Copiada com sucesso!" /* + copyText.value */);
}

(function() {
  'use strict';

  function $(a) {
    return document.querySelector(a);
  }

  var $form = $('[data-js="form-generator"]');
  var $result = $('[data-js="result-url"]');
  var $phone = $('[data-js="phone"]');
  var $url = 'https://api.whatsapp.com/send?phone=+55';

  function replacePhone() {
    return $url+$phone.value.replace(/\D/g, '');
  }

  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    $result.value = replacePhone();
  }, false);

  // var $a = document.createElement('a');
  // var $linkText = document.createTextNode('Clique no botão para copiar o seu link!');
  // $a.appendChild($linkText);
  // $a.title = $url;
  // $a.href = $url;
  // $a.target = "_blank";
  // $a.style = "color:#FFF";
  // $a.className = "btn";
  // $result.appendChild($a);

})();