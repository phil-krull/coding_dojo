var Stack = (function() {
  function Stack() {
    this.dataStore = [];
    this.top = -1;
  }
  Stack.prototype.push = function(item) {
    this.top++;
    this.dataStore[this.top] = item;
  }
  Stack.prototype.pop = function() {
    if(this.top == -1) {return}
    this.top--;
  }
  Stack.prototype.display = function() {
    for(var idx = 0; idx <= this.top; idx ++) {
      console.log(this.dataStore[idx]);
    }
  }
  return Stack;
})();
module.exports = Stack;