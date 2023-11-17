<script setup>
import { ref } from 'vue'


const emit = defineEmits([
    'stats-entered'
])//states what events will occur

const height = ref('')
const weight = ref('')
//the above are reactive variables

const buttonClicked = () =>{
    emit('stats-entered', 
    {heightInput: height.value, 
     weightInput: weight.value})
}//The line in the function emits an event to send the value of 2 variables

</script>

<template>
    <div id="child-component">
        <h2 id="input-title">Enter your height and weight</h2>
        <div>
            <label for="Height">Height in meters</label>
            <input v-model="height" type="number" id="Height" style="margin-left:45px"><!--v-model connects this input to the variable-->
            <br>
            <label for="Weight">Weight in Kilograms</label>
            <input v-model="weight" type="number" id="Weight" style="margin-left:13px"><!--v-model connects this input to the variable-->
            <br>
            <button v-on:click="buttonClicked" type="button" style="margin-top:20px" id="calculate">Calculate</button>
        </div><!--For the button element if it is clicked it activates the function to emit the input data-->
    </div>

</template>

<style scoped>
    #child-component{
        background-color: beige;
        font-size: 125%;
        padding-top: 5%;
        padding-bottom: 5%;
        margin-left: 10%;
        margin-right: 10%;
    }
    #calculate{
       background-color: lightgray;
       border: solid black;
       cursor: pointer;
    }
</style>
