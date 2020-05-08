<template>
<fragment>
    <div>{{ date }}</div>
    <div><input @keyup.ctrl.v="paste(index, 0)" v-model="valuesSchedule[index][0]" type="time" class="inputfield" /></div>
    <div><input @keyup.ctrl.v="paste(index, 1)" v-model="valuesSchedule[index][1]" type="time" class="inputfield" /></div>
    <div><input @keyup.ctrl.v="paste(index, 2)" v-model="valuesSchedule[index][2]" type="time" class="inputfield" /></div>
    <div><input @keyup.ctrl.v="paste(index, 3)" v-model="valuesSchedule[index][3]" type="time" class="inputfield" /></div>
    <div><input @keyup.ctrl.v="paste(index, 4)" v-model="valuesSchedule[index][4]" type="time" class="inputfield" /></div>
    <div><input @keyup.ctrl.v="paste(index, 5)" v-model="valuesSchedule[index][5]" type="time" class="inputfield" /></div>
    <div><input @keyup.ctrl.v="paste(index, 6)" v-model="valuesSchedule[index][6]" type="time" class="inputfield" /></div>
    <div @click="copy('row', index)"><font-awesome-icon :icon="['fas', 'copy']" /></div>
</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
    components: {
        Fragment
    },
    props: ['date', 'valuesSchedule', 'index', 'copy', 'paste']
}
</script>