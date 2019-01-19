<template>
  <div id="translate-form">
    <form @submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="请输入需要翻译的内容">
      <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: "translate-form",
  components: {},
  methods: {
    formSubmit(e) {
      e.preventDefault();
      //   alert("submitted " + this.textToTranslate);
      this.$emit("translateSubmit", this.textToTranslate);
    }
  },
  data() {
    return {
      textToTranslate: ""
    };
  }
};
</script>

<style>
</style>
