<template>
  <v-content>
    <v-icon class="icon" v-text="'access_time'"></v-icon>
    <h1>Clock</h1>
    <h2>{{ clock }}</h2>
    <h2>{{ calendarDate }}</h2>
  </v-content>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Clock',
  data() {
    return {
      calendarDate: '',
      clock: ''
    };
  },
  created() {
    this.clock = moment().format('LTS');
    this.calendarDate = moment().format('LL');
    setInterval(() => {
     this.clock = moment().format('LTS');
    }, 1000);
  }
}
</script>

<style>
h1 {
  color:royalblue;
}
.icon {
  font-size: 5em;
  left: 50px;
  position: absolute;
}

</style>
