<template>
<div>
    <div class="header">
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <span class="font3">{{category}} Assessment</span>
            <br><br>
            <span class="font2">
              <i class="fas fa-star"></i>
              {{difficulty}}
            </span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="font3 t-ali">
              <span  v-show="this.questions.length > 0" v-if="!timeUp">{{ minute }}:{{ second < 10 ? '0' + second : second }}</span>
              <span v-else>Time's up</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="container mt-55">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <span class="stack">Stack:</span>
          <span class="stack-b">{{stack.name}}</span>
        </div>
        <div class="col-lg-6 col-md-6 col sm-6">
          <span class="stack t-ali">Questions:</span>
          <span class="stack-b">{{this.questions.length}}</span>
          <br>
        </div>
      </div>
      <!-- This is the questions div. Note that the v-for is used to load all the questions and the isCurrent method is used to display the current question -->
      <div class="question" :class="{show: isCurrent(i)}" v-for="(question, i) in questions" :key="i">
        <h3>{{ question.question }}</h3>
        <p>
          <!-- Note the isChecked method. This is used to check if the question has been answered and preselect the answered option -->
          <!-- The answer method is used to answer the question -->
          <!-- The name method is used to give a different name to each question, so the preselection is not overridden -->
          <input @change="answer('A')" id="optionA" type="radio" :name="name(i + 1)">
          <label for="optionA">{{ question.optionA }}</label>
        </p>
        <p>
          <input @change="answer('B')" id="optionB" type="radio" :name="name(i + 1)">
          <label for="optionB">{{ question.optionB }}</label>
        </p>
        <p>
          <input @change="answer('C')" id="optionC" type="radio" :name="name(i + 1)">
          <label for="optionC">{{ question.optionC }}</label>
        </p>
        <p>
          <input @change="answer('D')" id="optionD" type="radio" :name="name(i + 1)">
          <label for="optionD">{{ question.optionD }}</label>
        </p>
      </div>
      </div>
      <!-- The go method is used to go back or go forward -->
      <!-- <button @click="go(-1)">PREVIOUS</button>
      <button @click="go(1)">NEXT</button>
      <span v-show="selectedQuestion == questions.length -1">
    <button class="__btn btn" @click="submit">Submit</button>
    </span> -->
     <div class="container" v-show="this.questions.length > 0">
          <button class="__btn btn" :disabled="currentQuestion === 0" @click="go(-1)">Previous</button>
          <a
            style="font-weight:bold"
            class="btn"
            :disabled="currentQuestion === questions.length - 1"
            @click="go(1)"
          >Next</a>
          <span v-show="currentQuestion == questions.length">
            <button class="__btn btn" @click="submit">Submit</button>
          </span>
      </div>
  </div>
</template>

<script>
import constants from "./includes/constants.js";
import axios from "axios";
const { API_URL } = constants;
export default {
  name: 'develo',
  data(){
    return {
      minute: 20,
      second: 0,
      timeUp: false,
      questions: [],
      currentQuestion: 1,
      answers: [],
      moment: moment,
      designquestion: "",
      designQuestions: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      date: moment(60 * 10 * 1000),
      selectedQuestion: 0,
      difficulty: "",
      designchoice: "",
      currScore: 0,
      selectedOption: "",
      items: "",
      answered: [],
      token: "",
      count: 0,
      userAnswers: [],
      category: "",
      stack: "",
      dismissSecs: 10,
      dismissCountDown: 0,
    }
  },
  methods: {
    isCurrent: function(index){
      return this.timeUp === false && this.currentQuestion === index + 1
    },
    go: function(dir){
      let { currentQuestion, questions } = this
      if (dir === -1 && currentQuestion === 1) alert("This is the first question")
      else if (dir === 1 && currentQuestion === questions.length) alert("This is the last question")
      else this.currentQuestion = currentQuestion + dir
      this.questionId = this.questions[this.selectedQuestion].id;
      let found = this.userAnswers.find(answer => {
        return answer.questions_id === this.questionId;
      });
      if (found) {
        this.userAnswers[this.userAnswers.indexOf(found)] = {
          questions_id: this.questionId,
          option: this.selectedOption
        };
      }
    },
    answer: function(answer){
      console.log(answer)
      let ans = answer
      let track = this.currentQuestion - 1
      this.questions[track].selected = ans;
       let found = this.userAnswers.find(answer => {
        return answer.id === this.currentQuestion;
      });
      if (found) {
        this.userAnswers[this.userAnswers.indexOf(found)] = {
          id: this.currentQuestion,
          option: ans
        };
      }
      else
      this.userAnswers.push({
        id: this.currentQuestion,
        option: ans
      })
      let { answers, currentQuestion } = this
      // This gets the index of the current question in the answer array and replaces the previous answer with the new one
      let search = answers.findIndex(answer => {
        return answer.question === currentQuestion
      })
      if(search){

          answers[search] = { question: currentQuestion, answer }
      }
        else {
        this.answers.push({
          option: answer
        });
    //   this.answers = answers
        }
    },
    name: function(option){
      // This returns a unique string for each question
      return `${option}option`
    },
    isChecked: function(option){
      // This returns true if the answer in the answer array is equal to the option
      return this.answers[this.currentQuestion - 1] === option
    },
    submit: function() {
      // this.questions.map
      this.$store.state.userAnswers = this.userAnswers;
      this.$router.push("/assesscomplete");
    },
  },
  mounted(){
      const { stack, category, difficulty } = JSON.parse(
      sessionStorage.getItem("assessment") || "{}"
    );
    
    const { state } = this.$store;
    this.stack = state.stack || stack;
    this.category = state.category || category;
    this.difficulty = state.difficulty || difficulty;
      axios
      .post(`${API_URL}/assessment/gquestions`, {
        testId: this.stack.id,
        difficulty: this.difficulty,
        category: this.category
      })
       .then(res => {
        this.questions = res.data.data;
        for(let i = 0; i < this.questions.length; i++){
          // this.questions[i].push({
          //   selected: null
          // })
          this.questions[i].selected = null;
        }
        // this.questionId = this.questions[0].id;
      });

    // this.questions = questions
    // This is used to populate the answers array with empty strings. Just to make it easier
    for (let i = 0; i < this.questions.length; i++){
      this.answers.push({ question: i + 1, answer: '' })
    }
    let timer = setInterval(() => {
      let { minute, second } = this
      if (second === 0 && minute === 0){
        clearInterval(timer)
        this.timeUp = true
      } else {
        if (second === 0){
          second = 59
          minute--
        } else second--
        this.second = second
        this.minute = minute
      }
    }, 1000)
  }
}
</script>

<style scoped>
.countdown {
  display: flex;
  align-items: center;
  justify-content: center
}
h1 {
  width: 100%
}
.quiz {
  display: none
}
.quiz.show {
  display: block;
}
</style>
