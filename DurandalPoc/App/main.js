requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
    function(app, viewLocator, system, router) {
        //Fix middle-buton click in anchor elements on Firefox (more details: https://github.com/twitter/bootstrap/pull/7899)
        $(document).off("click.dropdown-menu");

        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        app.title = 'Durandal Starter Kit';
        app.start().then(function() {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //configure routing
            router.useConvention();
            router.mapNav('welcome');
            router.mapNav('flickr');

            /*
            router.mapNav({
                url: 'users',
                name: 'Users',
                moduleId: 'viewmodels/userList'
            });
            */
            router.mapNav('users', 'viewmodels/userList', 'Users');

            //router.mapNav('userDetails');
            /*
            router.mapRoute({
                url: 'users/:id',
                name: 'User Details',
                moduleId: 'viewmodels/userDetails'
                //,visible: false
            });
            */
            router.mapRoute('users/:id', 'viewmodels/userDetails', 'User Details');


            app.adaptToDevice();

            //Show the app by setting the root view model for our application with a transition.
            app.setRoot('viewmodels/shell', 'entrance');
        });
    });