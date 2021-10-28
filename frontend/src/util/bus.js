import Vue from 'vue'

let install = (vue) => {
  vue.prototype.bus = new Vue()
}

export default install
