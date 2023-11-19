<script setup>

import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'
</script>


<template>
<!--HTML Template-->

<StudentMessage></StudentMessage>
<NewStudentForm></NewStudentForm>
<StudentTable></StudentTable>

<!--Because they are self contained chunk of functionality they can be easily rearranged by moving the references to them above or below eachother-->
</template>

<style scoped>/*'scoped' in the context of style means to keep the style choices localized in this component */



</style>
