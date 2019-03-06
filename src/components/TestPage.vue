<template>
  <div id="test">
    <header/>
    <div style="display:inline-block; width:127%; border: 2px solid blue">
      <span
        style="position: absolute;
    margin-left: -10px
    font-size: 34px;
    margin-top: -19px;
    border-radius: 50%;
    border: 1px solid;
    width: 70px;
    height: 70px;
    padding: 10px 17px;
    background: blue;
    color: white;"
      >
        <i class="fas fa-check"></i>
      </span>
      <span
        style="position: absolute;
    font-size: 34px;
    margin-left: 253px;
    margin-top: -19px;
    border-radius: 50%;
    border: 1px solid;
    width: 70px;
    height: 70px;
    padding: 10px 17px;
    background: blue;
    color: white;53px; margin-top: -19px;"
      >
        <i class="fas fa-check"></i>
      </span>
      <span
        style="position: absolute;
    font-size: 34px;
    margin-top: -19px;
    border-radius: 50%;
    margin-left: 506px;

    border: 1px solid;
    width: 70px;
    height: 70px;
    padding: 10px 17px;
    background: blue;
    color: white;06px; margin-top: -19px;"
      >
        <i class="fas fa-check"></i>
      </span>
      <span
        style="position: absolute;
    font-size: 34px;
    margin-top: -19px;
    margin-left: 750px;
    
    border-radius: 50%;
    border: 1px solid;
    width: 70px;
    height: 70px;
    padding: 10px 17px;
    background: blue;
    color: white;59px; margin-top: -19px;"
      >
        <i class="fas fa-check"></i>
      </span>
      <span
        style="position: absolute;
    font-size: 34px;
    margin-top: -31px;
    margin-left: 1000px;

    border-radius: 50%;
    border: 1px solid;
    width: 70px;
    height: 70px;
    padding: 10px 17px;
    background: blue;
    color: white;065px; margin-top: -19px;"
      >
        <i class="fas fa-check"></i>
      </span>
    </div>
    <br>
    <!-- </form> -->
    <div
      style="margin-top:100px"
      v-for="(question, index) in display1st"
      :key="`question-${index}`"
      class="question"
    >
      <ol>
        <li>
          <span style="font-size:30px; font-weight:bold">Question {{index +1}}</span>
          <h5 class v-html="question.question"></h5>
          <p>
            <label>
              <input class="with-gap" type="radio" @click="score('A',index )">
              <span class="font">{{ question.optionA }}</span>
            </label>
          </p>
          <br>
          <p>
            <label>
              <input class="with-gap" type="radio" @click="score('B')">
              <span class="font">{{ question.optionB }}</span>
            </label>
          </p>
          <br>
          <p>
            <label>
              <input class="with-gap" type="radio" @click="score('C')">
              <span class="font">{{ question.optionC }}</span>
            </label>
          </p>
          <br>
          <p>
            <label>
              <input class="with-gap" type="radio" @click="score('D')">
              <span class="font">{{ question.optionD }}</span>
            </label>
          </p>
          <br>
        </li>
      </ol>
    </div>
    <div>
      <span>
        <button class="btn" @click="loadnext(-1)">Previous</button>
      </span>
      <!-- <button class="btn" @click="()">Finish</button> -->
      <span>
        <button class="btn" @click="submit">Submit</button>
      </span>
      <span>
        <a class="btn btn-next" @click="loadnext(1)">Next</a>
      </span>
    </div>
  </div>

  <!-- <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>-->
  <!-- <dropdown /> -->
</template>
<style>
.font {
  color: black;
  font-weight: bold;
}
.container {
  height: 400px;
}
.btn-next {
  margin-top: -94px;
  margin-left: 370px;
}
.btn {
  height: 46px;
  margin-top: 450px;
}
.margin2 {
  margin-top: -50px !important;
}
.next {
  margin-top: -42px;
}
.font3 {
  margin-top: 80px;
  margin-left: 88px;
  color: #fff;
  font-family: cali;
  font-size: 38px;
}
.font2 {
  margin-top: -18px;
  margin-left: 88px;
  color: white;
  font-family: cali;
  font-weight: bold;
  font-size: 34px;
}

.header {
  height: 200px;
  width: 122.5%;
  background-image: linear-gradient(320deg, #bf1752, #2e3192);
  display: inline-block;
  margin-left: -249px;
}
.mt-55 {
  margin-top: 59px;
  margin-left: -100px;
}
.mt-4 {
  margin-top: 35px;
}
/* .margin{
  margin-left: 348px;
} */
</style>

    <script>
const moment = require("moment");
import timer from "./timer";
import testNav from "./includes/testNav";
import constants from "./includes/constants.js";
import axios from "axios";
const { API_URL } = constants;
import dropdown from "./includes/dropdown";
import header from "./includes/header";
export default {
  components: {
    timer,
    header,
    name: "TestPage"
  },
  data() {
    return {
      moment: moment,

      date: moment().format("LTS"),
      momentMain: "",
      count: 0,
      questions: [],
      hello: 0,
      world: 5,
      display1st: [],
      display2nd: [],
      display3rd: [],
      display4th: [],
      display5th: [],
      display6th: [],
      selectedQuestion: 0,
      difficulty: "",
      questionId: "",
      currScore: 0,
      selectedOption: "",
      items: "",
      answered: [],
      token: "",
      userAnswers: [],
      category: "",
      stack: "",
      minutes: 29,
      seconds: 59,
      garde: ""
    };
  },
  mounted() {
    this.stack = this.$store.state.stack;
    this.category = this.$store.state.category;
    this.difficulty = this.$store.state.difficulty;
    // this.moment2();
    display1st();
  },
  created() {
    // function time() {
    //   setInterval(() => {
    //     this.date = moment(this.date.subtract(1, "seconds"));
    //   }, 1000);
    // }
    const userData = sessionStorage.userData;
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(userData);
    this.token = token;
    this.stack = this.$store.state.stack;
    this.category = this.$store.state.category;
    this.difficulty = this.$store.state.difficulty;

    axios
      .post(
        `${API_URL}/assessment/gquestions`,
        {
          stack: this.stack,
          difficulty: this.difficulty,
          category: this.category // category: this.category
        },
        {
          headers: {
            Authorization: "Bearer " + this.token
          }
        }
      )
      .then(res => {
        this.questions = res.data.data;
        for (let i = 0; i < 5; i++) {
          this.display1st.push({
            id: this.questions[i].id,
            testId: this.questions[i].testId,
            categoryId: this.questions[i].categoryId,
            question: this.questions[i].question,
            optionA: this.questions[i].optionA,
            optionB: this.questions[i].optionB,
            optionC: this.questions[i].optionC,
            optionD: this.questions[i].optionD,
            difficulty: this.questions[i].difficulty,
            slug: this.questions[i].slug
          });
        }
        // for (let i = 5; i < 10; i++) {
        //   this.display2nd.push({
        //     id: this.questions[i].id,
        //     testId: this.questions[i].testId,
        //     categoryId: this.questions[i].categoryId,
        //     question: this.questions[i].question,
        //     optionA: this.questions[i].optionA,
        //     optionB: this.questions[i].optionB,
        //     optionC: this.questions[i].optionC,
        //     optionD: this.questions[i].optionD,
        //     difficulty: this.questions[i].difficulty,
        //     slug: this.questions[i].slug
        //   });
        // }
        // for (let i = 10; i < 15; i++) {
        //   this.display3rd.push({
        //     id: this.questions[i].id,
        //     testId: this.questions[i].testId,
        //     categoryId: this.questions[i].categoryId,
        //     question: this.questions[i].question,
        //     optionA: this.questions[i].optionA,
        //     optionB: this.questions[i].optionB,
        //     optionC: this.questions[i].optionC,
        //     optionD: this.questions[i].optionD,
        //     difficulty: this.questions[i].difficulty,
        //     slug: this.questions[i].slug
        //   });
        // }
        // for (let i = 15; i < 20; i++) {
        //   this.display4th.push({
        //     id: this.questions[i].id,
        //     testId: this.questions[i].testId,
        //     categoryId: this.questions[i].categoryId,
        //     question: this.questions[i].question,
        //     optionA: this.questions[i].optionA,
        //     optionB: this.questions[i].optionB,
        //     optionC: this.questions[i].optionC,
        //     optionD: this.questions[i].optionD,
        //     difficulty: this.questions[i].difficulty,
        //     slug: this.questions[i].slug
        //   });
        // }
        // for (let i = 20; i < 25; i++) {
        //   this.display5th.push({
        //     id: this.questions[i].id,
        //     testId: this.questions[i].testId,
        //     categoryId: this.questions[i].categoryId,
        //     question: this.questions[i].question,
        //     optionA: this.questions[i].optionA,
        //     optionB: this.questions[i].optionB,
        //     optionC: this.questions[i].optionC,
        //     optionD: this.questions[i].optionD,
        //     difficulty: this.questions[i].difficulty,
        //     slug: this.questions[i].slug
        //   });
        // }
        // for (let i = 25; i < 30; i++) {
        //   this.display6th.push({
        //     id: this.questions[i].id,
        //     testId: this.questions[i].testId,
        //     categoryId: this.questions[i].categoryId,
        //     question: this.questions[i].question,
        //     optionA: this.questions[i].optionA,
        //     optionB: this.questions[i].optionB,
        //     optionC: this.questions[i].optionC,
        //     optionD: this.questions[i].optionD,
        //     difficulty: this.questions[i].difficulty,
        //     slug: this.questions[i].slug
        //   });
        // }
        this.questionId = this.questions[0].id;
      });
  },
  methods: {
    loadnext: function(index) {
      this.count += index * 5;
      let bigArray = this.questions;
      let start = this.count;
      let end = this.count + 5;
      let newArrays = [];
      for (let i = start; i < end; i++) {
        newArrays.push({
          question: bigArray[i].question,
          optionA: bigArray[i].optionA,
          optionB: bigArray[i].optionB,
          optionC: bigArray[i].optionC,
          optionD: bigArray[i].optionD
        });
      }
      this.display1st = newArrays;
    },
    loadprev() {
      this.count += index * 5;
      let bigArray = this.questions;
      let start = this.count;
      let end = this.count + 5;
      let newArrays = [];
      for (let i = end; i < start; i--) {
        newArrays.push({
          question: bigArray[i].question,
          optionA: bigArray[i].optionA,
          optionB: bigArray[i].optionB,
          optionC: bigArray[i].optionC,
          optionD: bigArray[i].optionD
        });
      }
      this.display1st = newArrays.reverse();
    },
    // momentReload: function() {
    //   setInterval(moment2, 1000);
    // },
    // moment2: function() {
    //   setInterval(
    //     (this.momentMain = moment().format("MMMM Do YYYY, h:mm:ss a")),
    //     1000
    //   );
    // },
    // timer: function() {
    //   // let minute = 29, second = 59;
    //   setInterval(function() {
    //     this.seconds--;
    //     if (this.seconds < 0) {
    //       this.seconds = 59;
    //       this.minutes--;
    //     }
    //   }, 1000);
    // },
    // go: function(index) {
    //   this.selectedOption = "";
    //   this.selectedQuestion = this.selectedQuestion + index;
    //   // for (let i = 0; i < questions.length; i++) {
    //   this.questionId = this.questions[this.selectedQuestion].id;
    //   // }
    // },
    score: function(option, index) {
      // let found = this.userAnswers.find(answer => {
      //   return answer.questions_id === this.questionId;
      // });

      // if (found) {
      //   this.userAnswers[this.userAnswers.indexOf(found)] = {
      //     questions_id: this.questionId,
      //     option: option
      //   };
      // } else {
      this.userAnswers.push({
        questions_id: this.questions[index].id,
        option: option
        // });
      });

      //  }

      console.log(this.userAnswers);
    },
    submit: function() {
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
    },
    checked: function(option) {
      return this.selectedOption === option;
    }
  },
  computed: {
    loaded() {
      let counted = (count += 1);
      return counted;
    }
    // top5(hello, world) {
    //   hello = this.hello;
    //   world = this.world;
    //   return this.questions.splice(hello, world);
    // }
    // top5() {
    //   return this.questions.splice(0, 5);
    // }
    // time: function() {
    //   //return this.date.format("mm:ss");
    //   return "time:" + this.date;
    // },
    // reactTime: function() {
    //   let reload = setInterval(function() {
    //     return this.time;
    //   }, 1000);
    //   return reload;
    // }
  }
};
</script>