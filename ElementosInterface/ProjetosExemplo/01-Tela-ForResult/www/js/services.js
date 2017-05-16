angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('taskToDo', [function(){
    var array = [];

    var add = function(newObj){
        array.push(newObj);
    }

    var get = function(){
        return array;
    }

    var removeTask = function(nome){
        for(var i = 0; i < array.length; i++){
            if(array[i] == nome){
                console.log("removeu");
                array.splice(i, 1);
            }
        }
    }
    var empty = function(){
        array = [];
    }

    return{
        add: add,
        get: get,
        empty: empty,
        removeTask: removeTask
    }
}])