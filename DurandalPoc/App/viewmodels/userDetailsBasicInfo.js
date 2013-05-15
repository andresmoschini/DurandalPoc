define(['durandal/plugins/router', 'durandal/system', 'durandal/app', 'services/repository', 'viewmodels/userDetails'], function (router, system, app, repository, userDetails) {
    alert("userDetailsBasicInfo");
    system.log("userDetailsBasicInfo");
    system.log(userDetails.user());

    var vm = {
        basicInfo: userDetails.user().BasicInfo
    };

    return vm;
});