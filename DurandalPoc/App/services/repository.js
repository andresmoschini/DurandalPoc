define('services/repository', ['durandal/system'],
    function (system) {
        var getUsers = function (usersObservable, forceRemote) {
            //TODO: use cache and forceRemote 
            return $
                .ajax({
                    url: "api/users",
                    type: "GET",
                    dataType: "json"
                })
                .then(function (result) {
                    if (usersObservable)
                        usersObservable(result);
                })
                .fail(function () {
                    //TODO?
                });
        };

        var getUserDetails = function (id, userObservable, forceRemote) {
            //TODO: use cache and forceRemote 
            return $
                .ajax({
                    url: "api/users/" + id,
                    type: "GET",
                    dataType: "json"
                })
                .then(function (result) {
                    system.log(result);
                    if (userObservable)
                        userObservable(result);
                })
                .fail(function () {
                    //TODO?
                });
        };

        var deleteUser = function (id) {
            return $
                .ajax({
                    url: "api/users/" + id,
                    type: "DELETE",
                    dataType: "json"
                }).then(function (result) {
                    system.log(result);
                    //TODO?
                })
                .fail(function () {
                    //TODO?
                });
        };

        return {
            getUsers: getUsers,
            getUserDetails: getUserDetails,
            deleteUser: deleteUser
        }
    });