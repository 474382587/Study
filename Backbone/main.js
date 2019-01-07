var BasePage = Backbone.View.extend({
    show: function () {
        this.$el.show()
    },
    hide: function () {
        this.$el.hide()
    }
})

var PageIssueList = BasePage.extend({
    el: '#page-issue-list',
})
var PageIssueCreate = BasePage.extend({
    el: '#page-issue-create',
})
var PageIssueEdit = BasePage.extend({
    el: '#page-issue-edit',
})

var AppRouter = Backbone.Router.extend({

    initialize: function () {
        this.pageIssueList = new PageIssueList()
        this.pageIssueEdit = new PageIssueEdit()
        this.pageIssueCreate = new PageIssueCreate()
    },

    hideAllPages: function () {
        this.pageIssueEdit.$el.hide()
        this.pageIssueCreate.$el.hide()
        this.pageIssueList.$el.hide()
    },

    routes: {
        'issue/new': 'issueCreate',
        'issue/:id': 'issueEdit',
        '': 'issueList'
    },
    issueEdit: function (id) {
        this.hideAllPages()
        this.pageIssueEdit.show()
    },
    issueCreate: function () {
        this.hideAllPages()
        this.pageIssueCreate.show()
    },
    issueList: function () {
        this.hideAllPages()
        this.pageIssueList.show()
    }
})

var router = new AppRouter()
Backbone.history.start()