<script setup>
// code here
import { useStudentStore } from '../stores/StudentStore.js' //importing function
//the '..' in the from reference is to get to the 'components' folder level to access 'stores' folder

import { storeToRefs } from 'pinia' 

import { computed } from 'vue';

import StudentRow from './StudentRow.vue'

const studentStore = useStudentStore() //reference the store

const { sortedStudents, studentCount } = storeToRefs(studentStore) //convert things in store to 'refs'

const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}

const arrivedOrLeft = (student, IsStudentPresent) => {
    student.present = IsStudentPresent //
    studentStore.arrivedOrLeft(student)
}

//The below makes sure grammar is correct when there is one student
const pluralStudentMessage = computed( () => {
    if (studentCount.value === 1) {
        return "There is 1 student in class"
    }else{
        return `There are ${studentCount.value} students in class`
    }
})

</script>


<template>
<!--HTML Template-->
<div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5 class="card-subtitle text-muted">{{ pluralStudentMessage }}</h5>

    <div id="student-table">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>StarID</th>
                    <th>Present?</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <StudentRow 
                v-for="student in sortedStudents"
                v-bind:student="student"
                v-on:arrived-or-left="arrivedOrLeft"
                v-on:delete-student="deleteStudent"
                ></StudentRow>
                <!--The v-on looks for the emit 'arrived-or-left' event from StudentRow
                The v-bind line gives data to StudentRow as a prop. The student after the equal sign is from the v-for and setting it equal to the prop.
                -->
            </tbody>
        </table>
    </div>
</div>

</template>

<style scoped>/*'scoped' in the context of style means to keep the style choices localized in this component */

#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, tr {
    width: 25%;
}

</style>