define(['durandal/system', 'durandal/app', 'services/repository'], function (system, app, repository) {
    var vm = {
        users: ko.observableArray(),
        activate: activate,
        refresh: refresh,
        title: 'User List View'
    };

    return vm;

    function activate() {
        system.log(vm.title + ' Activated', null, 'userList', true);

        return repository.getUsers(vm.users);
    }

    function refresh() {
        return repository.getUsers(vm.users, true);
    }
});