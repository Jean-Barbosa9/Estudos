// Organizar esse arquivo posteriormente em um outro repositório

function documentMask(){
  var regex = /(^[\d]{3}\.)([\d]{3}\.)([\d]{3}\-)([\d]{1})$/;

  CPF.on('keypress',function(e){
    if((e.keyCode < 48) || (e.keyCode > 57)){
      return false
    }else{
      if (($(this).val().length == 3) || ($(this).val().length == 7)){
        this.value += '.'
      }
      if ($(this).val().length == 11){
        this.value += '-'
      }

      if ($(this).val().length >= 13){
        if (regex.test(this.value)){
          CPF.closest('.friends__list').siblings('.friends__steps-next').removeAttr('disabled')
        }
      }
    }
  })

  CPF.on('blur',function(){
    if(this.value.length < this.getAttribute('maxlength')){
      CPF.closest('.friends__list').siblings('.friends__steps-next').attr('disabled','disabled')
    }
  })
  }

  function phoneMask(){
    var initialMaxlength = $('[type=tel]').attr('maxlength')
    $('[type=tel]').on('focus',function(){
      if(this.value[0] != '('){
        this.value = '(' + this.value
      }
      $(this).removeClass('friends__input--error').siblings('.friends__validation').css('opacity','0').html('').closest('.friends__item').removeClass('friends__item--error')
    })
    $('[type=tel]').blur(function(){
      if((this.value.length < this.getAttribute('maxlength')) && (this.getAttribute('required','required') || this.value.length > 1)){
        $(this).addClass('friends__input--error').siblings('.friends__validation').css('opacity','1').html('Favor preencher o telefone completo').closest('.friends__item').addClass('friends__item--error')

        $(this).closest('.friends__list').siblings('.friends__button').attr('disabled','disabled')
      }
      if ((this.value.length == this.getAttribute('maxlength')) && this.getAttribute('required','required')){
        var regex = /^\(?([0-9]{2,3})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
        if (regex.test(this.value)){
          $(this).closest('.friends__list').siblings('.friends__button').removeAttr('disabled')
        }
      }
      if((this.value.length == this.getAttribute('maxlength')) && !this.getAttribute('required','required')){
        $(this).closest('.friends__list').siblings('.friends__button').removeAttr('disabled')
      }
    })

    $('[type=tel]').on('keypress',function(e){
      if((e.keyCode < 48) || (e.keyCode > 57)){
      return false
      }else if((e.keyCode == 8) || (e.keyCode == 46)){
        this.setAttribute('maxlength',initialMaxlength)
      }else{
        var regex = /[1-9]/
        var regexValid = regex.test(this.value[1])
        if((this.value.length >= 5 && this.value[1] != 0) || (this.value.length >= 7 && this.value[6] != 9)){
          this.setAttribute('maxlength','15')
        }
        if(this.value[1] != 0 && this.value.length >= 6 && this.value[5] != 9){
          this.setAttribute('maxlength','14')
        }
        if(regexValid && (this.value.length == 3) || ((this.value[1] == 0) && (this.value.length == 4))){
          this.value += ') '
        }
        if((regexValid && (this.value.length == 9)  && (this.value[5] != 9)) || ((this.value[1] == 0) && (this.value.length == 10) && (this.value[6] != 9))){
          this.value += '-'
        }else if (regexValid && (this.value.length == 10)  || ((this.value[1] == 0) || (this.value[6] == 9)) && this.value.length == 11 ){
          this.value += '-'
        }

      }
    })
  }
