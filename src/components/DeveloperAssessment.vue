<template>
  <div>
    <div class="header">
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">08167219276
            <span class="font3">{{category}} Assessment</span>
            <br>
            <span class="font2">
              <i class="fas fa-star"></i>
              {{difficulty}}
            </span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="font3 t-ali">
              <span v-if="!timeUp">{{ minute }}:{{ second < 10 ? '0' + second : second }}</span>
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
      
     
      <div>
        <div class="question" v-for="(question, i) in questions" :key="i">        
          <span class="font-b" v-html="questions[0].question"></span>
          
            <p v-for="(que, j) in questions[0].options" :key="j">  
              <input v-model="questions[0].answer" :value="que.value" type="radio" name="num" @click="score(que.value, questions[0].id)">
              <span class="font">{{ que.text }}</span>
            </p>
            <br>
            <!-- <p>
              <input type="radio" name="num" @click="score('B', question.id)">
              <span class="font">{{ questions[selectedQuestion].optionB }}</span>
            </p>
            <br>
            <p>
              <input type="radio" name="num" @click="score('C', question.id)">
              <span class="font">{{ questions[selectedQuestion].optionC }}</span>
            </p>
            <br>
            <p>
              <input type="radio" name="num" @click="score('D', question.id)">
              <span class="font">{{ questions[selectedQuestion].optionD }}</span>
            </p>
          <br> -->
        </div>
        <div class="button">
          <button class="__btn btn" :disabled="selectedQuestion === 0" @click="go(-1)">Previous</button>
          <a
            style="font-weight:bold"
            class="btn"
            :disabled="selectedQuestion === questions.length - 1"
            @click="go(1)"
          >Next</a>
          <span v-show="selectedQuestion == questions.length -1">
            <button class="__btn btn" @click="submit">Submit</button>
          </span>
          </div>
      </div>

      
    </div>
  </div>
</template>
<style>


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
  justify-content: center;
}

h1 {
  width: 100%;
}

.quiz {
  display: none;
}

.quiz.show {
  display: block;
}
</style>

<script>
const moment = require("moment");
import constants from "./includes/constants.js";
import axios from "axios";
const { API_URL } = constants;
export default {
  name: "DevAssessment",
  components: {},
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
      minute: 1,
      second: 10,
      timeUp: false,
      currentQuestion: 1,
      answers: []
    };
  },
  created() {
    
    setInterval(function() {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
      }
    }, 1000);
  },
  async mounted() {
    let timer = setInterval(() => {
      let { minute, second } = this;

      if (second === 0 && minute === 0) {
        clearInterval(timer);
        this.timeUp = true;
        this.$router.push("/assesscomplete");
        axios.post
      } else {
        if (second === 0) {
          second = 59;
          minute--;
        } else second--;

        this.second = second;
        this.minute = minute;
      }
    }, 1000);
    const { stack, category, difficulty } = JSON.parse(
      sessionStorage.getItem("assessment") || "{}"
    );
    
    const { state } = this.$store;
    this.stack = state.stack || stack;
    this.category = state.category || category;
    this.difficulty = state.difficulty || difficulty;
    
    let newQuestionArray = [];

    let res = await axios
      .post(`${API_URL}/assessment/gquestions`, {
        testId: this.stack.id,
        difficulty: this.difficulty,
        category: this.category
      });
      this.questions = res.data.data;
      for(let i = 0; i < this.questions.length; i++) {
        let question = this.questions[i];
        question.answer = '';
        question.options = [
          {
            value: 'A',
            text: this.questions[i].optionA
          },
          {
            value: 'B',
            text: this.questions[i].optionB
          },
          {
            value: 'C',
            text: this.questions[i].optionA
          },
          {
            value: 'D',
            text: this.questions[i].optionB
          }
        ];
        
        //push to new Array
        newQuestionArray.push(question);
      }
      // console.log('Questions', this.questions);
      // console.log('New Questions', newQuestionArray);
      this.questions = newQuestionArray;
      this.questionId = this.questions[0].id;
    
  },
  methods: {
    timeUp() {
      if (this.timeUp == true) {
        this.$router.push("/");
      }
    },
    isCurrent: function(index) {
      return this.timeUp === false && this.currentQuestion === index + 1;
    },
    go: function(dir) {
      let { currentQuestion, questions } = this;
      if (dir === -1 && currentQuestion === 1)
        alert("This is the first question");
      else if (dir === 1 && currentQuestion === questions.length)
        alert("This is the last question");
      else this.currentQuestion = currentQuestion + dir;
    },
    answer: function(answer) {
      let { answers, currentQuestion } = this;

      let search = answers.findIndex(answer => {
        return answer.question === currentQuestion;
      });

      answers[search] = { question: currentQuestion, answer };

      this.answers = answers;
    },
    name: function(option) {
      return `${option}option`;
    },
    // isChecked: function(option){
    //   return this.answers[this.currentQuestion - 1].answer === option
    // },
    find: function(value) {},
    go: function(index) {
      // this.selectedOption = "";
      this.selectedQuestion = this.selectedQuestion + index;
      this.count = this.selectedQuestion + 1;
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
    score: function(option, id) {
      let found = this.questions.find((question, i) => {
        if(question.id === id) {
          question.answer = option;
          console.log('Question with answer', question);
          console.log('All Questions', this.questions);
        }
      });

      // if (found) {
      //   this.userAnswers[this.userAnswers.indexOf(found)] = {
      //     questions_id: id,
      //     option: option
      //   };

      //   // sessionStorage.setItem("userAnswers", JSON.stringify(this.userAnswers));
      // } else {
      //   this.userAnswers.push({
      //     questions_id: id,
      //     option: option
      //   });
      //   sessionStorage.setItem("userAnswers", JSON.stringify(this.userAnswers));
      // }
    },
    submit: function() {
      this.$store.state.userAnswers = this.userAnswers;
      this.$router.push("/assessmentcompletion");
    },
    checked: function(option) {
      return this.selectedOption == option;
    }
  },
  computed: {
    hasQuestions() {
      return this.questions.length > 0;
    }
  }
};
</script>
