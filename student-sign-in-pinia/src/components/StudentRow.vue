The Functions that used to be tied directly to the StudentTable.vue like 'deleteStudent' or 'arrivedOrLeft' had to 
be changed to new function that indirectly tie them together because you cannot directly manipulate prop information.
It can only be handled by the component that already has the ability to change it.
<script setup>

import { ref } from 'vue'

const props = defineProps({
    student: Object
})//student is the variable name we use in this component

const emit = defineEmits( ['arrived-or-left', 'delete-student']) //This notify's the function arrived or left in the StudentTable.vue

const IsStudentPresent = ref(props.student.present)//The '.present' boolean is from the studentList that is default false

const notifyArrivedOrLeft = () => {
    //tell parent that student arrived or left - emit an event
    emit('arrived-or-left', props.student, IsStudentPresent.value)//emits an event to StudentTable
}

const confirmThenDeleteStudent = () => {
    emit('delete-student', props.student)
}

</script>

<template>
    <!-- TODO create table rows 
    Each row will have a checkbox, bound to the app's data 
    When the checkbox is checked/unchecked, 
    the student will be signed in/out -->
    <tr v-bind:class="{ present: student.present, absent: !student.present }">
        <td> {{ student.name }} </td>
        <td> {{ student.starID }} </td>
        <td>
            <input type="checkbox" v-model="IsStudentPresent" v-on:change="notifyArrivedOrLeft"><!--It used to be '...="notifyArrivedOrLeft(student)"' so we could print their name in the goodbye message, but since each row is their own component they do it automatically-->
            <span v-if="student.present" class="mx-3"> Here </span>
            <span v-else class="mx-3"> Not present </span>
        </td> <!-- todo checkbox for present/absent -->
        <td>
            <button class="btn btn-danger" v-on:click="confirmThenDeleteStudent"><!-- used to be '...="deleteStudent(student)"' to specify the student we are talking about, but since each student has its own component it automatically does it with out the need for (student)-->
                <i class="bi bi-trash-fill"></i> Delete 
            </button>
        </td> <!-- todo delete button -->
    </tr>

</template>

<style scoped>
.present {
    color: gray;
    font-style: italic;
}
.absent {
    color: black;
    font-weight: bold;
}
</style>