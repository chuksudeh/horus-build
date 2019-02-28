<template>
  <div class="presentation">
    <div class="header">
      <div class="mt-4">
        <span class="font3">{{category}} Assessment</span>
        <!-- <span class="count"></span> -->
        <!-- <span style="color:white">{{reactTime}}</span> -->
        <!-- <span class="font3">I have just been created {{time}}</span> -->
        <br>
        <!-- <span style="margin-left: 300px" id="timer" class="timer">{{this.minutes}} : {{this.seconds}}</span> -->
        <span class="font2">
          <i class="fas fa-star"></i>
          {{difficulty}}
        </span>
      </div>
    </div>
    <!-- <div class="result" v-if="this.grade == 'passed'">You have successfully passed the assessment
      <br>Schedule an Interview
      <br>
      <button class="button">Interview</button>
    </div>
    <div class="result" v-else>You have not passed the test. Please try again</div>-->
    <div class="container top-margin">Using ReactJS, Design a simple calculator.
      <br>The Calculator should be able to perform the following operations which includes
      <ul>
        <li>Multiplication</li>
        <li>Modular Division</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import constants from "./includes/constants.js";
const { API_URL } = constants;

export default {
  name: "presentation",
  data() {
    return {
      grade: "",
      stack: "",
      token: "",
      grade: "",
      question: ""
    };
  },
  created() {
    const userData = sessionStorage.userData;
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(userData);
    this.token = token;
    this.stack = this.$store.state.stack;
    this.difficulty = this.$store.state.difficulty;
    this.userAnswers = this.$store.state.userAnswers;
    this.grade = this.$store.state.grade;
  }
};
</script>

<style>
.result {
  margin-top: 173px;
  font-size: 33px;
}
@import "../../static/css/assessment.css";
</style>
