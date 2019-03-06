<template>
  <div class="presentation">
    <div class="header">
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <span class="font3">{{category}} Assessment</span>
            <br>
            <span class="font2">
              <i class="fas fa-star"></i>
              {{difficulty}}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-55">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <span class="stack">Stack:</span>
          <span class="stack-b">{{stack.name}}</span> <br><br>
        
      <span class="check">
        <i class="fas fa-check"></i>
      </span>
      <br>
      <br>
      <br>
      <h3 class="gray">Thank You</h3>
      <span class="gray">You have completed and successfully submitted your assessment.
        <br>Please click on the button to take the presentation review.
      </span>
      <br>
      <br>
      <button @click="presentation" class="btn pres-btn">Go to Presentation</button>
    </div>
  </div>
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
      const { stack, category, difficulty } = JSON.parse(
      sessionStorage.getItem("assessment") || "{}"
    );
    const { state } = this.$store;
    this.stack = state.stack || stack;
    this.category = state.category || category;
    this.difficulty = state.difficulty || difficulty;
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
</style>
