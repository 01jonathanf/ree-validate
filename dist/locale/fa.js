!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__ree_validate_locale__fa=n.__ree_validate_locale__fa||{},n.__ree_validate_locale__fa.js=e())}(this,function(){"use strict";var n={name:"fa",messages:{after:function(n,e){return n+" باید بعد از تاریخ "+e[0]+" باشد."},alpha_dash:function(n){return n+" فقط می تواند از حروف، اعداد، خط فاصله و زیرخط تشکیل شود."},alpha_num:function(n){return n+" فقط میتواند از حروف و اعداد تشکیل شود."},alpha_spaces:function(n){return n+" فقط می تواند از حروف و فاصله تشکیل شود."},alpha:function(n){return n+" فقط می تواند از حروف تشکیل شود."},before:function(n,e){return n+" باید قبل از تاریخ "+e[0]+" باشد."},between:function(n,e){return n+" باید بین "+e[0]+" و "+e[1]+" کارکتر باشد."},confirmed:function(n){return n+" با تاییدیه اش مطابقت ندارد."},credit_card:function(n){return n+" غیر معتبر است."},date_between:function(n,e){return n+" باید بین تاریخ "+e[0]+" and "+e[1]+" باشد."},date_format:function(n,e){return n+" باید در قالب "+e[0]+" باشد."},decimal:function(n,e){void 0===e&&(e=["*"]);var t=e[0];return n+" باید یک مقدار عددی "+("*"===t?"":" با حداکثر "+t+" اعشار")+" باشد."},digits:function(n,e){return n+" باید یک مقدار عددی و دقیقاً "+e[0]+" رقم باشد."},dimensions:function(n,e){return n+" باید در اندازه "+e[0]+" پیکسل عرض و "+e[1]+" پیکسل ارتفاع باشد."},email:function(n){return n+" باید یک پست الکترونیک معتبر باشد."},ext:function(n){return n+" باید یک فایل معتبر باشد."},image:function(n){return n+" باید یک تصویر باشد."},in:function(n){return n+" باید یک مقدار معتبر باشد."},ip:function(n){return n+" باید یک آدرس آی پی معتبر باشد."},max:function(n,e){return n+" نباید بیشتر از "+e[0]+" کارکتر باشد."},max_value:function(n,e){return"مقدار "+n+" باید "+e[0]+" یا کمتر باشد."},mimes:function(n){return n+" باید از نوع معتبر باشد."},min:function(n,e){return n+" باید حداقل "+e[0]+" کارکتر باشد."},min_value:function(n,e){return"مقدار "+n+" باید "+e[0]+" یا بیشتر باشد."},not_in:function(n){return n+"باید یک مقدار معتبر باشد."},numeric:function(n){return n+" فقط می تواند عددی باشد."},regex:function(n){return"قالب "+n+" قابل قبول نیست."},required:function(n){return n+" الزامی است."},size:function(n,e){return"حجم "+n+" کمتر از "+e[0]+" کیلو بایت باشد."},url:function(n){return n+" باید یک تارنمای معتبر باشد."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(n),n});