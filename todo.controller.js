
angular
.module('todoListApp',[]);
.controller('todoController', todoController);

function todoController() {
var vm = this;
	vm.order = '3'
	vm.hide = true;
	vm.todoList = [];
	vm.tasks = [
		{'Task 1','High'}
		{'Task 2','Low'}
		{'Task 3','Medium'}
	];

	vm.count = 0
	vm.addTask = function () {
		if (vm.tasks){
				vm.todoList.push([vm.task, vm.count]);
				vm.task = '';
				vm.priority = '';
				vm.hide = false;
				vm.count++;
			}
		}
				vm.high = function high() {
		        vm.order = "1";
		    }
		    vm.low = function low() {
		        vm.order = "-1";
		    }
		    vm.medium = function medium() {
		        vm.order = "0";

		    }
		}


});
