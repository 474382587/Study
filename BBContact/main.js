var todoList = [
    {
        name: '1',
        done: false
    },
    {
        name: '2',
        done: false
    },
    {
        name: '3',
        done: true
    },
    {
        name: '4',
        done: false
    }
]
// Model and its collection
var Item = Backbone.Model.extend({
    defaults: {
        name: '',
        done: false
    }
})

var ItemList = Backbone.Collection.extend({
    model: Item,
    initialize: function() {}
})

var itemList = new ItemList()

todoList.forEach(e => {
    itemList.add(e)
})

var InputView = Backbone.View.extend({
    el: '#todo-input',
    events: {
        keypress: 'handleEnter'
    },
    handleEnter: function(e) {
        console.log(e)
        if (e.charCode === 13) {
            itemList.add({
                name: e.target.value,
                done: false
            })
            console.log(itemList)
            e.target.value = ''
        }
    }
})
var inputView = new InputView()

var ItemView = Backbone.View.extend({
    el: '#item-list',
    initialize: function() {
        this.render()
        this.listenTo(itemList, 'add', this.render),
        this.listenTo(itemList, 'all', this.render)
    },
    events: {
        'change input': 'handleCheckbox',
        'click .remove': 'handleRemove'
    },
    handleRemove: function(e) {
        console.log(e)
        var index = e.target.dataset.index
        itemList.models[index].destroy()
        console.log(itemList)
    },
    handleCheckbox: function(e) {
        console.dir(e.target.dataset.index)
        var index = e.target.dataset.index
        itemList.models[index].set('done', !itemList.models[index].get('done'))
        console.log(itemList.models)
    },
    render: function() {
        this.$el.html('')
        if (itemList.length > 0) {
            for (var i = 0; i < itemList.length; i++) {
                this.$el.append(
                    `<li>
                        <span>
                            ${itemList.models[i].get('name')}
                        </span>
                        <input type="checkbox" data-index="${i}" ${itemList.models[i].get('done')? 'checked' : ''} />
                        <button data-index="${i}" class='remove'>Remove</button>
                    </li>`
                )
            }
        }
    }
})

var itemView = new ItemView()
