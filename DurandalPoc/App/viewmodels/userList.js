define(['durandal/system', 'durandal/app'], function (system, app) {
    var vm = {
        activate: activate,
        title: 'User List View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        system.log(vm.title + ' Activated', null, 'userList', true);
        return true;
    }
    //#endregion
});