<template>
  <div id="app">
    <h1>Yandex 翻译</h1>
    <h5>Powered by Yandex.Translate & Vue.js</h5>
    <TranslateForm @translateSubmit="TranslateText"></TranslateForm>
    <!-- Need to add a language selector -->
    <TranslateOutput v-if="translatedText.length" v-text="translatedText[0]"></TranslateOutput>
  </div>
</template>

<script>
import TranslateForm from "./components/TranslateForm.vue";
import TranslateOutput from "./components/TranslateOutput.vue";
import axios from "axios";

const apiBaseUrl =
  "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190123T052427Z.2b7cc1881f9d1420.4db184e4e8fc590d5f2ebef53329ff7a14408055&lang=";

export default {
  name: "app",
  components: {
    TranslateForm,
    TranslateOutput
  },
  data() {
    return {
      translatedText: []
    };
  },
  methods: {
    TranslateText(e) {
      console.log("text to translate", e);
      let requestUrl = apiBaseUrl + "en-zh&text=" + e;
      axios.get(requestUrl).then(res => {
        console.log(res.data.text);
        this.translatedText = res.data.text;
      });
    }
  }
};
</script>

<style>
</style>
