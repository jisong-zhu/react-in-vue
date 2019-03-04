<template>
  <div>
    Hello {{msg}}
    <react-content />
    <react-main />
  </div>
</template>

<script>
import Content from "../React-Com/Content";
import MainBody from "../React/Main";

export default {
  data() {
    return { msg: 'Jason' }
  },
  components: {
      "react-content": Content,
      "react-main": MainBody
  }
}
</script>