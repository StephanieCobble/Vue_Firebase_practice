

const app = Vue.createApp({
    //data, functions
    //template: '<h2> This is a template </h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45 
        }
    },
    methods: {
        changeTitle() {
            this.title = 'This is a new title'
        }
    }
})

app.mount('#app')