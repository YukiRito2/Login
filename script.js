+ function($) {
  $('.palceholder').click(function() {
    $(this).siblings('input').focus();
  });

  $('.form-control').focus(function() {
    $(this).parent().addClass("focused");
  });

  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).parent().removeClass("focused");
  });
  $('.form-control').blur();

  // validetion
  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'validate-tooltip'
  });

  $("#formvalidate").validate({
    rules: {
      userName: {
        required: true,
        minlength: 6
      },
      userPassword: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      userName: {
        required: "Porfavor ingrese su usuario ₍⸍⸌̣ʷ̣̫⸍̣⸌₎ ",
        minlength: "Usario no valido intentelo de nuevo =^._.^="
      },
      userPassword: {
        required: "Ingrese su contraseña.",
        minlength: "Contraseña incorrecta =^._.^="
      }
    }
  });

}(jQuery);