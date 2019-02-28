<template>
  <div style="font-family:poppins">
    <div>
      <div class="header">
        <div class="mt-5">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <span style="font-family:poppins" class="font3">{{category}} Assessment</span>
            <br>
            <span class="font2">
              <i class="fas fa-star"></i>
              {{difficulty}}
            </span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="font3">
              <span v-if="!timeUp">{{ minute }}:{{ second < 10 ? '0' + second : second }}</span>
              <span v-else>Time's up</span>
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
          <div class="col-lg-6 col-md-6 col sm-6" style="text-align:right">
            <span class="stack">Questions Available:</span>
            <span class="stack-b">{{this.questions.length}}</span>
            <br>

          </div>
        </div>
        <br>
        <br>
        <div
          class="line"
          style="display:inline-block; height:10px; width:80%; color:#2e3192; font-family:Poppins; font-weight:bold"
        >
         
        </div>
        <br>
        <div>
          <div class="question">
            <!-- <select name id v-model="question">
              <option
                @click="find('value')" 
                v-for="(question,index) in this.questions"
                :key="`question-${index}`"
                v-bind:value="{id: question.id, name: question.name}"
              >{{question && question.question}}</option>
            </select> -->
              <!-- <div class="question" :class="{show: isCurrent(i)}" v-for="(question, i) in this.questions" :key="i">

            <br>
            <br>
            <h3 v-html="question.question"></h3>
            <h3>Hello Wor</h3>
              <p>
             <input :checked="isChecked('a')" @change="answer('a')" id="optionA" type="radio" :name="name(i + 1)">
                <label for="optionA">{{ question.optionA }}</label>
              </p>
              <p>
                <input :checked="isChecked('b')" @change="answer('b')" id="optionB" type="radio" :name="name(i + 1)">
                <label for="optionB">{{ question.optionB }}</label>
              </p>
              <p>
                <input :checked="isChecked('c')" @change="answer('c')" id="optionC" type="radio" :name="name(i + 1)">
                <label for="optionC">{{ question.optionC }}</label>
              </p>
              <p>
                <input :checked="isChecked('d')" @change="answer('d')" id="optionD" type="radio" :name="name(i + 1)">
                <label for="optionD">{{ question.optionD }}</label>
              </p> -->

            <span class="font" v-html="questions[selectedQuestion].question"></span>
            <p>
              <label>
                <input
                  class="with-gap"
                  type="radio"
                  name="num"
                  :checked="checked('A')"
                  @click="score('A')"
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
                  :checked="checked('B')"
                  @click="score('B')"
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
                  :checked="checked('C')"
                  @click="score('C')"
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
                  :checked="checked('D')"
                  @click="score('D')"
                >
                <span class="font">{{ questions[selectedQuestion].optionD }}</span>
              </label>
            </p>
            <br>
          </div>
          <div class="button">
            <button
              class="waves-effect waves-light __btn btn"
              :disabled="selectedQuestion === 0"
              @click="go(-1)"
            >Previous</button>
            <button
              class="waves-effect waves-light __btn btn"
              :disabled="selectedQuestion === questions.length - 1"
              @click="go(1)"
            >Next</button>
            
            <button
              class="waves-effect waves-light __btn btn"
              :disabled="selectedQuestion < questions.length -1"
              @click="submit"
            >Submit</button>
          </div>
        </div>

        <!-- <div class="question" v-else>
          <h5 style="font-weight:bold">UI Re-Design</h5>
          <h6>Please select one of the listed options to redesign</h6>
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
          <br>
          <br>
          <div></div>
        </div> -->
        <!-- <span style="font-weight:bold">Design Brief</span>
            <br>

            <span>
              Designers are expected to come up with a re-design of the user interface (UI) of the Adobe XD website (https://
              xd.adobe.com)
            </span>
            <br>
            <span>
              All contestants should ensure a neat presentation of thoughts, ideas and content created ensuring that they remain
              relevant to the subject focal point.
            </span>
            <br>
            <span>Note: Design plagiarism is discouraged, as all ideas should be genuine.</span>
            <br>
            <br>
            <br>
            <span style="font-weight:bold">Requirement</span>
            <br>
            <span>Visit http://designersarise.com/project-brief/
              <br>Read through the project brief.
              <br>Accepted file formats: PNG
              <br>Max file size is 60mb
            </span>
            <br>
            <span>
              Send your enteries to
              <span style="color:red">Info@findworka.com</span>
            </span>
            <br>
            <hr>
            <span>Entry submission and voting commences on the 19th of November and closes on the 28th of September 2018.</span>
          </div>
          <br>

          <button class="btn des-btn" @click="dessubmit">Submit</button>
        </div>-->
        <!-- <button class="waves-effect waves-light btn" v-else @click="go(1)">Next</button> -->
      </div>
    </div>
  </div>
</template>
<style>
@import "../../static/css/assessment.css";
@import url("https://fonts.googleapis.com/css?family=Poppins");
.stack {
  font-size: 21px;
  font-family: Poppins;
}
.stack-b {
  font-weight: bold;
  font-size: 21px;
  font-family: Poppins;
}
.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  width: 100%;
}
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

<script>
// if (this.$route.path == '/career') {
//   console.log("found");
// }
const moment = require("moment");
import Timer from "./timer";
import AppHeader from "./includes/header";
import testNav from "./includes/testNav";
import constants from "./includes/constants.js";
import axios from "axios";
const { API_URL } = constants;
import dropdown from "./includes/dropdown";
export default {
  name: "DevAssessment",
  components: {
    Timer,
    AppHeader
  },
  data() {
    return {
      moment: moment,
      designquestion: "",
      designQuestions: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      date: moment(60 * 10 * 1000),
      questions: [],
      question: null,
      selectedQuestion: 0,
      difficulty: "",
      questionId: "",
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
      minute: 0,
      second: 10,
      timeUp: false,
      currentQuestion: 1,
      answers: []
    };
  },
  created() {
    const { stack, category, difficulty } = JSON.parse(
      sessionStorage.getItem("assessment") || "{}"
    );
    setInterval(function() {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
      }
    }, 1000);
  },
  mounted() {
    let timer = setInterval(() => {
      let { minute, second } = this;

      if (second === 0 && minute === 0) {
        clearInterval(timer);
        this.timeUp = true;
      } else {
        if (second === 0) {
          second = 59;
          minute--;
        } else second--;

        this.second = second;
        this.minute = minute;
      }
    }, 1000);
    // const userData =d sessionStorage.userData;
    // if (!userData) this.$router.push("/");
    // const { token } = JSON.parse(userData);
    // this.token = token;
    const { stack, category, difficulty } = JSON.parse(
      sessionStorage.getItem("assessment") || "{}"
    );
    // const sessionAns = JSON.parse(sessionStorage.getItem("useranswers"));
    // this.userAnswers = sessionAns;
    // const userAnswers = JSON.parse(
    //   sessionStorage.setItem('userAnswers', this.userAnswers)
    // )
    const { state } = this.$store;
    this.stack = state.stack || stack;
    this.category = state.category || category;
    this.difficulty = state.difficulty || difficulty;

    axios
      .post(
        `${API_URL}/assessment/gquestions`,
        {
          testId: this.stack.id,
          difficulty: this.difficulty,
          category: this.category
        }
      )
      .then(res => {
        this.questions = res.data.data;
        // if (this.hasQuestions) {
        this.questionId = this.questions[0].id;
        // }
      });
    // this.countDownChanged;
    // this.showAlert;
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
    },
    answer: function(answer){
      let { answers, currentQuestion } = this

      let search = answers.findIndex(answer => {
        return answer.question === currentQuestion
      })

      answers[search] = { question: currentQuestion, answer }

      this.answers = answers
    },
    name: function(option){
      return `${option}option`
    },
    // isChecked: function(option){
    //   return this.answers[this.currentQuestion - 1].answer === option
    // },
    
    find: function(value) {},
    go: function(index) {
      // this.selectedOption = "";
      this.selectedQuestion = this.selectedQuestion + index;
      this.count = this.selectedQuestion + 1;
      // for (let i = 0; i < questions.length; i++) {
      this.questionId = this.questions[this.selectedQuestion].id;
      let found = this.userAnswers.find(answer => {
        return answer.questions_id === this.questionId;
      });
      if (found) {
        this.userAnswers[this.userAnswers.indexOf(found)] = {
          questions_id: this.questionId,
          option: this.selectedOption
        };

        // console.log(option);
        // this.selectedOption === option;
      }
      // }
    },
    score: function(option) {
      let found = this.userAnswers.find(answer => {
        return answer.questions_id === this.questionId;
      });

      if (found) {
        this.userAnswers[this.userAnswers.indexOf(found)] = {
          questions_id: this.questionId,
          option: option
        };

        sessionStorage.setItem("userAnswers", JSON.stringify(this.userAnswers));
      } else {
        this.userAnswers.push({
          questions_id: this.questionId,
          option: option
        });
        sessionStorage.setItem("userAnswers", JSON.stringify(this.userAnswers));
      }
      //  }
      // console.log("user" + this.userAnswers[this.selectedQuestion].option);
    },
    submit: function() {
      this.$store.state.userAnswers = this.userAnswers;
      this.$router.push("/assessmentcompletion");
    },
    // dessubmit: function() {
    //   this.$store.state.designchoice = this.designchoice;
    //   this.$router.push("/assessmentcompletion");
    // },
    checked: function(option) {
      return this.selectedOption === option;
    }
  },
  computed: {
    // time: function() {
    //   return this.date.format("mm:ss");
    // },
    // hasQuestions() {
    //   return this.questions.length > 0;
    // }
  }
};
</script>
