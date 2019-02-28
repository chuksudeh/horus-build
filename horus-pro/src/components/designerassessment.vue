<template>
  <div class="presentation">
    <div class="header">
      <div class="mt-4">
        <span class="font3">{{category}} Assessment</span>
        <span class="count"></span>
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
    <div class="question">
      <h2>UI Re-Design</h2>
      <h4>Please select one of the listed options to redesign</h4>
      <p>
        <label>
          <input class="with-gap" name="question" v-model="question" type="radio">
          <span>Red</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="question" v-model="question" type="radio">
          <span>Yellow</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="question" v-model="question" type="radio">
          <span>Green</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="question" v-model="question" type="radio">
          <span>Brown</span>
        </label>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import constants from "./includes/constants.js";
const { API_URL } = constants;

export default {
  name: "DesAssessment",
  data() {
    return {
      questions: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
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
    axios
      .post(
        `${API_URL}/assessment/postAnswer`,
        {
          userAnswers: this.userAnswers,
          stack: this.stack,
          difficulty: this.difficulty
        },
        {
          headers: {
            Authorization: "Bearer " + this.token
          }
        }
      )
      .then(res => {
        this.grade = res.data.data;
        console.log(res);
        if (res.error) this.error = "Unable to post Answer";
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
@import "../../static/css/assessment.css";
</style>
