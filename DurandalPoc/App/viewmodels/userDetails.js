define(['durandal/plugins/router', 'durandal/system', 'durandal/app', 'services/repository'], function (router, system, app, repository) {
    var vm = {
        userId: "",
        user: ko.observable(),
        activate: activate,
        refresh: refresh,
        title: 'User Details View',
        deleteUser: deleteUser
    };

    return vm;

    function activate(routeData) {
        system.log(vm.title + ' Activated', null, 'userList', true);
        vm.userId = routeData.id;

        return repository.getUserDetails(vm.userId, vm.user);
    }

    function refresh() {
        return repository.getUserDetails(vm.userId, vm.user, true);
    }

    function deleteUser() {
        repository.deleteUser(vm.userId).then(function () {
            router.navigateBack();
        });
    }
});