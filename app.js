const app = new Vue({
    el: '#app',
    data: {
      isVisible: true,
      msg: 'ezzz',
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible
        }
    }
})