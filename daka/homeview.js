define(['text!template/home.html'], function(Home) {
    var HomeView = Backbone.View.extend({
        className: 'home-view',
        events: {},
        initialize: function() {
            this.render()
        },
        render: function() {
            $('#home').html(this.template)
        },
        template: _.template(Home)
    })
    console.log(Home)

    return HomeView
})
