var ModuleX = require('./module-x');
var ModuleY = require('./module-y');

(function ($) {
  $(document).ready(function(){
    ModuleX.test();
    ModuleY.test();
  });

})(jQuery);
