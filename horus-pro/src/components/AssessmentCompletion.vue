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
    <div class="__margin">
      <span class="check">
        <i class="fas fa-check"></i>
      </span>
      <br>
      <br>
      <br>
      <h3 class="gray">Thank You</h3>
      <span class="gray">You have completed and successfully submitted your assement.
        <br>Please click on the button to take the presentation review.
      </span>
      <br>
      <br>
      <button @click="presentation" class="presentation-button">Go to Presentation</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import constants from "./includes/constants.js";
const { API_URL } = constants;

export default {
  name: "AssessmentCompletion",
  data() {
    return {
      userAnswers: [],
      grade: "",
      stack: "",
      token: "",
      score: ""
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
        this.grade = res.data.grade;
        this.score = res.data.score;
        console.log(this.grade);
        this.$store.state.grade = this.grade;
        if (res.error) this.error = "Unable to post Answer";
      })
      .catch(err => console.log(err));
  },
  methods: {
    presentation: function() {
      this.$router.push("/presentation");
    }
  }
};
</script>

<style>
@import "../../static/css/assessment.css";
</style>
