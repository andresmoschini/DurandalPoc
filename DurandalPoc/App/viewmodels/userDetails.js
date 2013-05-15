define(['durandal/system', 'durandal/app'], function (system, app) {
    var vm = {
        activate: activate,
        title: 'User Details View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        system.log(vm.title + ' Activated', null, 'userDetails', true);
        return true;
    }
    //#endregion
});