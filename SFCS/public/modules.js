$('.ui.dropdown')
  .dropdown()
;

$('.ui.form')
  .form({
    fields: {
      name     : 'empty',
      job      : 'empty',
      username : ['regExp[/^[\a-zA-Z0-9_-]{4,16}$/g]'],
      password : ['minLength[6]', 'empty'],
      terms    : 'checked'
    },
    prompt: {
      empty                : '{name} không được để trống',
      checked              : 'Bạn phải chấp nhận điều khoản sử dụng dịch vụ',
      minLength            : '{name} phải có ít nhất {ruleValue} kí tự',
      regExp               : '{name} phải có từ 4 đến 16 ký tự không dấu'
    }
  })
;