<template>
  <div>
    <div class="dateContainer">
      <input type="date" @change="calculateDates" v-model="beginDate" class="datePicker" />
      <input type="date" @change="calculateDates" v-model="endDate" class="datePicker" />
    </div>
    <div class="schedule">
      <div></div>
      <div class="labels">
        t1
        <div @click="copy('col', 0)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels">
        t2
        <div @click="copy('col', 1)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels">
        t3
        <div @click="copy('col', 2)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels">
        t4
        <div @click="copy('col', 3)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels">
        t5
        <div @click="copy('col', 4)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels">
        t6
        <div @click="copy('col', 5)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels">
        t7
        <div @click="copy('col', 6)">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </div>
      </div>
      <div class="labels"></div>
      <Row :date="dates[0]" :valuesSchedule="valuesSchedule" index="0" :copy="copy" :paste="paste" />
      <Row :date="dates[1]" :valuesSchedule="valuesSchedule" index="1" :copy="copy" :paste="paste" />
      <Row :date="dates[2]" :valuesSchedule="valuesSchedule" index="2" :copy="copy" :paste="paste" />
      <Row :date="dates[3]" :valuesSchedule="valuesSchedule" index="3" :copy="copy" :paste="paste" />
      <Row :date="dates[4]" :valuesSchedule="valuesSchedule" index="4" :copy="copy" :paste="paste" />
      <Row :date="dates[5]" :valuesSchedule="valuesSchedule" index="5" :copy="copy" :paste="paste" />
      <Row :date="dates[6]" :valuesSchedule="valuesSchedule" index="6" :copy="copy" :paste="paste" />
      <Row :date="dates[7]" :valuesSchedule="valuesSchedule" index="7" :copy="copy" :paste="paste" />
    </div>
  </div>
</template>

<script>
import Row from "./Row";
const moment = require("moment");
let beginDate = moment();
let endDate = moment();
let dates = [
  '23/03/20',
  '24/03/20',
  '25/03/20',
  '26/03/20',
  '27/03/20',
  '28/03/20',
  '29/03/20',
  '30/03/20'
];
let copyType;
let copied;
let valuesSchedule = [
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 0
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 1
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 2
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 3
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 4
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 5
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"], // row 6
  ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"]  // row 7
];
export default {
  components: {
    Row
  },
  methods: {
    calculateDates() {
      if ((moment.isMoment(beginDate)) && (moment.isMoment(endDate))) {        
        const diff = endDate.diff(beginDate, 'days');
        console.log(diff);        
      }           
    },
    copy(type, index) {
      copyType = type;

      if (type === "row") {
        copied = valuesSchedule[index];
      }
      if (type === "col") {
        copied = [];
        for (let j = 0; j < valuesSchedule.length; j++) {
          const element = valuesSchedule[j][index];
          copied.push(element);
        }
      }
    },
    paste(col, row) {
      if (copyType === "row") {
        this.$set(this.valuesSchedule, col, [...copied]);
      } else if (copyType === "col") {
        for (let j = 0; j < 8; j++) {
          this.$set(this.valuesSchedule[j], row, copied[j]);
        }
      } else {
        alert("You should first copy values before you can paste something.");
      }
    }
  },
  data() {
    return {
      beginDate,
      endDate,
      dates,
      copyType,
      copied,
      valuesSchedule
    };
  }
};
</script>

<style>
.dateContainer {
  margin-bottom: 2rem;
  text-align: center;
}
.datePicker {
  margin-right: 1rem;
  padding: 1rem;
  border-color: #eee;
  border-style: solid;
  border-width: 0.1rem;
}
.schedule {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(50px, auto);
  justify-items: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  background-color: #fff;
}
.labels {
  width: 4.5rem;
  display: inline-flex;
  justify-content: space-evenly;
}
.inputfield {
  width: 4.5rem;
  padding: 0.2rem;
  margin-left: 1rem;
  border-color: #eee;
  border-width: 0.1rem;
  border-style: solid;
}
</style>