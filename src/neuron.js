const Connection = require("./connection");
/*Cost= (a(L)-1)^2, where 1 will be expected value
 *net=w*a+b /// net(L)=w(L)*a(L-1)+b(L)
 * a(L)=sigmoid(net(L))
 *
 * */
function Neuron() {
  let self = this;
  
  self.connection = {
    incoming: [],
    outgoing: []
  }
  self.outputs = []
  
  self.connect = function(neuron, weight) {
    // Code here...
  }
  
  /**x is an array w*i
    _sum:function(x){
    return _.sum(x);
    },
   **squash 1/1+e^(-neth)
   **
   _squash: function(x){
    return 1 / (1 + Math.exp(-net));
   },
   
   **-knowledge, "===" same "type" as well
   
   isInpunt: function(){
   let self=this;
   return self.connections.inputs.lenght ===  1
   }
   */
  self.activate = function(input) {
	  // let self=this;
	  // let output;
	  //
  }
}

module.exports = Neuron;
