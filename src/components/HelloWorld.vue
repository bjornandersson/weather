<template>
  <div class="hello">
    <input type="text" @input="onType($event)" />
    <div v-if="wind.speed">
      Wind speed: {{ wind.speed }} m/s
      Wind direction: {{ wind.deg }} degrees
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Service } from './service';

export default Vue.extend({
  name: 'HelloWorld',
  async created() {
    const result = await Service.getWeather('Karlskrona');
    console.log(result);
    this.wind = result.wind;
  },
  methods: {
    async onType(event: Event) {
      if (event.target) {
        const result = await Service.getWeather((event.target as HTMLInputElement).value);
        if (result.cod !== '404') {
          this.wind = result.wind;
        }
      }
    },
  },
  data() {
    return {
      wind: {},
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
