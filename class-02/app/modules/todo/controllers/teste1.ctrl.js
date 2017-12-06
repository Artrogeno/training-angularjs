function Teste1Ctrl() {
    var vm = this;
    vm.pageTitle = 'Teste1';
    vm.action = undefined;
    vm.msgAlert = undefined;
    vm.showAlert = false;

    vm.doAction = _doAction;
    vm.hideAlert = _hideAlert;

    function _doAction(){
        vm.showAlert = true;
        vm.msgAlert  = "<strong>Alert!</strong> " + vm.action + " ...";
    }

    function _hideAlert(){
        vm.showAlert = false;
        vm.msgAlert  = undefined;
    }


}

angular.module('todoApp')
    .controller('Teste1Ctrl', Teste1Ctrl);

