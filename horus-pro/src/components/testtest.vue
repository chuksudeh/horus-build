<template>
  <div id="test">
    <div class="image">
      <img src="../assets/img/banner.jpg" class="image" alt="banner">
    </div>
    <testNav/>

    <div class="container mt-5">
      <!-- <div class="line mt-5">
                            
      </div>-->
      <!-- <div class="__myapp">
                            <span class="size">
                            Page1    
                            </span>
                            <span class="size active">
                            Page2
                            </span>
                            <span class="size">
                            Page3
                            </span>
                            <span class="size">
                            Page4
                            </span>
                            <span class="size">
                            Page5
                            </span>
      -->
    </div>
    <!-- </form> -->
    <ol id="tests">
      <li>
        <h5 class v-html="questions[selectedQuestion].question"></h5>
        <p>
          <label>
            <input
              class="with-gap"
              type="radio"
              name="num"
              :checked="isChecked('a')"
              @change="score('a')"
            >
            <span class="font">{{ questions[selectedQuestion].optionA }}</span>
          </label>
        </p>
        <br>
        <p>
          <label>
            <input
              class="with-gap"
              type="radio"
              name="num"
              :checked="isChecked('b')"
              @change="score('b')"
            >
            <span class="font">{{ questions[selectedQuestion].optionB }}</span>
          </label>
        </p>
        <br>
        <p>
          <label>
            <input
              class="with-gap"
              type="radio"
              name="num"
              :checked="isChecked('c')"
              @change="score('c')"
            >
            <span class="font">{{ questions[selectedQuestion].optionC }}</span>
          </label>
        </p>
        <br>
        <p>
          <label>
            <input
              class="with-gap"
              type="radio"
              name="num"
              :checked="isChecked('d')"
              @change="score('d')"
            >
            <span class="font">{{ questions[selectedQuestion].optionD }}</span>
          </label>
        </p>
        <br>
      </li>
    </ol>
    <button
      class="btn btn-primary width margin2"
      :disabled="selectedQuestion === 0"
      @click="go(-1)"
    >Previous</button>
    <button
      class="btn btn-primary width margin"
      :disabled="selectedQuestion === questions.length - 1"
      @click="go(1)"
    >Next</button>
    <button class="btn btn-primary width margin" @click="submit()">Submit</button>
  </div>
</template>
<style>
.font {
  color: black;
  font-weight: bold;
}
</style>

    <script>
import testNav from "./includes/testNav";
import constants from "./includes/constants.js";
import axios from "axios";
const { API_URL } = constants;
export default {
  components: {
    name: "TestPage"
  },
  data() {
    return {
      questions: [],
      selectedQuestion: 0,
      currScore: 0,
      selectedOption: "",
      items: "",
      answered: [],
      userAnswers: []
    };
  },
  mounted() {
    const userData = sessionStorage.userData;
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(userData);
    this.token = token;

    axios
      .get(`${API_URL}/assessment/questions`, {
        headers: {
          Authorization: "Bearer " + this.token
        }
      })
      .then(res => {
        this.questions = res.data.data;
      });
  },
  methods: {
    go: function(index) {
      this.selectedOption = "";
      this.selectedQuestion = this.selectedQuestion + index;
    },
   
  },
  isChecked: function(option) {
    return this.selectedOption === option;
  },
  // score: option => {
  //   let userAnswers = this.userAnswers;
  //   this.userAnswers.push(option);
  // },
  score: function(option) {
    this.selectedOption = option;

    let { questions, selectedQuestion, answered } = this;
    const { answer } = questions[selectedQuestion];

    if (answered.includes(selectedQuestion)) {
      if (option === answer) this.currScore += 1;
      else this.currScore += -1;
    } else {
      if (option === answer) this.currScore += 1;

      this.answered.push(selectedQuestion);
    }
  },
   submit: function() {
      axios
        .post(
          `${API_URL}/assessment/addResult`,
          {
            userAnswers: this.userAnswers
          },
          {
            headers: {
              Authorization: "Bearer " + this.token
            }
          }
        )
        .then(res => {
          res = res.data;
          console.log(res);
          if (res.error) this.error = "Unable to post Answer";
          else {
            sessionStorage.setItem("userData", JSON.stringify(res.data));
            this.$router.push("questions");
          }
        })
        .catch(err => console.log(err));
    }
};
</script>