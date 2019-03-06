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

    <div class="container mt-5">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <span class="stack">Stack:</span>
          <span class="stack-b">{{stack.name}}</span> <br><br>
        <div v-for="(question, i) in theoryQuestions" :key="i">
          <span>{{question.question}}</span>
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
  name: "presentation",
  data() {
    return {
      grade: "",
      stack: "",
      token: "",
      grade: "",
      question: "",
      theoryQuestions: []
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
      .post(`${API_URL}/assessment/gettheoryquestions`, {
        testId: this.stack.id,
        difficulty: this.difficulty,
        category: this.category
      })
      .then(res => {
        this.theoryQuestions = res.data.data;
        // this.questionId = this.questions[0].id;
      });

  }
};
</script>

<style>
.result {
  margin-top: 173px;
  font-size: 33px;
}
</style>
