<script setup>
    import { ref } from 'vue'

    import { useStudentStore } from '../stores/StudentStore.js'


    const studentStore = useStudentStore()

    const newStudentName = ref('')
    const newStarID = ref('')

    const formErrors = ref([]) 

    function addStudent() {
        formErrors.value = []// reset formErrors

        if (!newStudentName.value ){
            formErrors.value.push('Student name must be entered')
        }

        if (!newStarID.value ) {//
            formErrors.value.push('StarID must be entered')
        }

        if (formErrors.value.length == 0){ //check if there are errors
            let student = {
            name: newStudentName.value,
            starID: newStarID.value,
            present: false
            }

            // TODO - how to add student? Different from Lab 9 where we append it to an array. 
            // Have to find a way to emit it to App.vue
            studentStore.addNewStudent(student)

            newStudentName.value = ''
            newStarID.value = ''
        }
    }

</script>


<template>
<!--HTML Template-->
    <div id="new-student-form-errors" class="m-2">
        <!-- TODO show errors from form validation -->
        <div v-if="formErrors.length > 0" class="alert alert-danger">
            <li v-for="error in formErrors">
                {{ error }}
            </li>
        </div>
    </div>

    <div id="new-student-form" class="card add-student m-2 p-2">
        <h4 class="card-title">Add new student</h4>
        <div class="form-group mb-3">
            <label for="name">Name</label>
            <!-- TODO v-model newStudentName -->
            <input v-model.trim ="newStudentName" id="name" class="form-control">
        </div>

        <div class="form-group mb-3">
            <label for="starID">Star ID</label>
                <!-- TODO v-model newStarID -->
            <input v-model.trim ="newStarID" id="starID" class="form-control">
        </div>

        <!-- TODO v-on:click event handler -->
        <button v-on:click="addStudent" class="btn btn-primary">Add</button>
    </div>



</template>

<style scoped>/*'scoped' in the context of style means to keep the style choices localized in this component */



</style>