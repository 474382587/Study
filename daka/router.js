define(['homeview'], function(HomeView) {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            register: 'register',
            login: 'login',
            dashboard: 'dashboard'
        },
        home: function() {
            console.log('home page')
                var homeView = new HomeView()
                homeView.render()
        }
    })
    console.log(HomeView)
    var appRouter = new Router()

    appRouter.on('route:register', function() {
        console.log('register page')
    })
    appRouter.on('route:login', function() {
        console.log('login page')
    })
    appRouter.on('route:dashboard', function() {
        console.log('dashboard page')
    })
    return appRouter
})
