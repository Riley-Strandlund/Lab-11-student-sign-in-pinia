import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// () => {} arrow notation for a function
export const useStudentStore = defineStore('students', () => {

        const studentList = ref( [
            { name: 'A. Student', starID: 'aa1234aa', present: false },
            { name: 'B. Student', starID: 'bb5678bb', present: false }
        ])// Array filled with example students

        const mostRecentStudent = ref( {} ) //empty Object

        function addNewStudent(student) {
            studentList.value.push(student)//adds student object to StudentList
        }//adds a new student to the studentList array

        function deleteStudent(studentToDelete) {
            studentList.value = studentList.value.filter( (student) => {
                return studentToDelete != student //if this returns true keep student if false student is deleted
            })//return Riley != Riley is false because Riley does equal Riley | return Riley != Sam is true because Riley doesn't equal Sam.
            mostRecentStudent.value = {}//removes hello and goodbye messages once student is deleted.
        }

        function arrivedOrLeft(student) {
            mostRecentStudent.value = student
        }
        
        const studentCount = computed( () => {
            return studentList.value.length
        })//returns how many things are inside of StudentList

        const sortedStudents = computed( () => {
            return studentList.value.toSorted( (s1, s2) => {
                return s1.name.localeCompare(s2.name)
            })
        })//sorts students by comparing names then organizing them alphabetically

        return {
            //reactive data
            studentList,
            mostRecentStudent,
            
            //functions
            addNewStudent,
            deleteStudent,
            arrivedOrLeft,

            //computed properties
            studentCount,
            sortedStudents,
        }

})