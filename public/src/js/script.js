new Vue({
    el: '#app',
    data: {
        name: null,
        toggle: false,
        result: false,
        step: null,
        counter: 0,
        initvalue: 0,
        message: "",
        courses: [
            { id: 1, title: 'learn vuejs', price: 34 },
            { id: 2, title: 'learn reactjs', price: 65 },
            { id: 3, title: 'learn angularjs', price: 89 },
        ],
        errormessage: null,
        text: "text there",
        platefrm: '<a href="#app" > go to top </a>',
        image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'

    },
    methods: {
        salam: function() {
            return `function there , ${this.message}`
        },
        increment: function() {
            if (this.counter <= 100 - parseInt(this.step))
                this.counter += parseInt(this.step)
        },
        decrement: function() {
            if (this.counter >= 0 + parseInt(this.step))
                this.counter -= parseInt(this.step)
        },
        reset: function() {
            this.counter = 0
        },
        add: function() {
            alert("method add")
        },
        logname: function(value) {
            console.log(value)
        },

    },
    computed: {
        calcul: function() {

            if (this.initvalue == null || this.initvalue == "")
                return null
            if (parseInt(this.initvalue) || this.initvalue == 0) {
                return this.counter * this.initvalue
            } else {
                this.errormessage = "write a number";
                return this.errormessage
            }

        },
        classObject: function() {
            return { 'bg-success': this.result, 'bg-danger': !this.result }
        },

    },
    watch: {
        calcul: function(v) {
            if (v >= 10) {
                this.result = true;
                this.message = "WINNER";
            } else {
                this.result = false;
                this.message = "LOSER";
            }

        }
    }
})