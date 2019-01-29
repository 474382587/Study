requirejs.config({
    baseUrl: '/daka',
    path: {
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text.js',
        router: './'
    }
})

requirejs(['router'], function(appRouter) {
    // var router = new Router()
    console.log(appRouter)
    Backbone.history.start();
})
