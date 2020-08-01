function buttonCopy() {
  var copyText = document.getElementById("input-url-generate");
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
  var $url = 'https://api.whatsapp.com/send?phone=+55seunumerodetelefone&text=suamensagem';
  
  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    $result.innerHTML = $phone.value.replace(/\D/g, '');
  }, false);

  var $h5 = document.createElement('h5');
  $h5.textContent = 'Seu link será gerado abaixo:';
  $result.appendChild($h5);
  $h5.style = "color: #004d40";

  // var $a = document.createElement('a');
  // var $linkText = document.createTextNode('Clique no botão para copiar o seu link!');
  // $a.appendChild($linkText);
  // $a.title = $url;
  // $a.href = $url;
  // $a.target = "_blank";
  // $a.style = "color:#FFF";
  // $a.className = "btn";
  // $result.appendChild($a);

  var $input = document.createElement('input');
  $input.textContent = 'Copiar o seu link';
  $result.appendChild($input);
  $input.value = $url;
  $input.type = "text";
  $input.id = "input-url-generate";

})();