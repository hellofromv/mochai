(function(exports){
  function Farid(howAwesome){
    this.awesomeLevel = howAwesome;
  }
  exports.Farid = Farid;

  Farid.prototype = {
    swaggy: function(message){
      return 'brah swaggy';
    }
  };
})(this);