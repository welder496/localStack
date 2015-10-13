var pilha = [];

module.exports = {

      clear: function(callback){
          pilha = [];
          callback({message: "Pilha limpa com sucesso!!"});
      },

      push: function(value,callback){
          pilha.unshift(value);
          callback({message: "Valor empilhado com sucesso!!"});
      },

      isEmpty: function(){
          return (pilha.length == 0);
      },

      pop: function(callback){
          if (pilha.length != 0) {
            var value = pilha.shift();
            callback(value);
          } else {
            callback({message: "Pilha vazia!!"});
          }
      },

      stack: function(callback){
            callback(pilha);
      }

};