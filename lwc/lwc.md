[LWC](https://lwc.dev/)

# HTML 
- Data Binding `curly braces: {property}`
- Event Handling `onchange={handleInputChange}`
- Use Getters _**why**?_ **-- It's illegal to compute a value in the HTML template. NO EXPRESSION**
- Render Lists `for:each={array} for:index="index" for:item="currentItem"`
- Conditional Rendering `if:true|false={property}`

# CSS
- Scope `CSS encapsulation`
- SLDS `Bootstrap?`

# Component
- Parent and Child
- Call a Method on a Child Component
- Query Selector
- Slot/ Named Slot

# Reactive Properties
- private
- @track - private
- @api - public
- getter / setter

# Events
- Syntax `oneventtype`
- Custom Events 
- Event Propagation `bubbles` and `composed`
```` 
this.template.querySelector('div')
    .dispatchEvent( new CustomEvent('notify', { bubbles: true } )
);
````

# Lifecycle
- `constructor()`
- `connectedCallback()`
- `disconnectedCallback()`
- `render()`
- `renderedCallback()`
- `errorCallback()`

# Share JavaScript Code

# Third party code

