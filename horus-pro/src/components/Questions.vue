<template>
  <div class="container mt-5 mar-left">
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-2"></div>
      <div class="col-lg-8 col-md-8 col-sm-8">
        <form method="POST" @submit.prevent="questions" enctype="multipart/form-data">
          <h2 class="text-center">Create Question</h2>
          <div class="col-lg-8 col-md-8 col-sm-8">
            <textarea
              name="question"
              rows="4"
              cols="50"
              placeholder="Question"
              class="textarea"
              v-model="question"
              required
            ></textarea>
          </div>
          <div class>
            <input
              placeholder="Option A"
              name="optionA"
              v-model="optionA"
              type="text"
              class="form-control required"
            >
          </div>
          <div class>
            <input
              placeholder="Option B"
              name="optionB"
              type="text"
              v-model="optionB"
              class="form-control required"
            >
          </div>
          <div class>
            <input
              placeholder="Option C"
              name="optionC"
              type="text"
              v-model="optionC"
              class="form-control required"
            >
          </div>
          <div class>
            <input
              placeholder="Option D"
              name="optionD"
              type="text"
              v-model="optionD"
              class="form-control required"
            >
          </div>

          <!-- <dropdown/> -->
          <!-- <label>Difficulty</label>
            <select v-model="difficulty">
              <option>beginner</option>
              <option>beginner</option>
              <option>beginner</option>
              <option>beginner</option>
          </select>-->
          <div>
            <label>Category</label>
            <select name="category" v-model="category" style="display: inline-block;">
              <option
                v-for="(category, index) in categories"
                :key="`category-${index}`"
              >{{ category }}</option>
            </select>
          </div>
          <div v-if="this.category === 'Developer'">
            <label for="developerStack" class="font">Developer-Stack</label>
            <select
              name="developerStack"
              style="display: inline-block"
              class="width"
              v-model="developerStack"
              id
            >
              <option
                v-for="(developerStack, index) in developerStacks"
                :key="`developerStack-${index}`"
              >{{ developerStack }}</option>
            </select>
            <br>
          </div>
          <div v-else>
            <label for="DesignerStack" class="font">Designer-Stack</label>
            <select
              name="designerStack"
              style="display: inline-block"
              class="width"
              v-model="designerStack"
              id
            >
              <option
                v-for="(designerStack, index) in designerStacks"
                :key="`designerStack-${index}`"
              >{{ designerStack }}</option>
            </select>
            <br>
          </div>
          <div>
            <label>Difficulty</label>
            <select name="difficulty" v-model="difficulty" style="display: inline-block;">
              <option
                v-for="(difficulty, index) in difficulties"
                :key="`difficulty-${index}`"
              >{{ difficulty }}</option>
            </select>
          </div>
          <div>
            <label>Answer</label>
            <select name="answer" v-model="answer" style="display: inline-block;">
              <option v-for="(answer, index) in answers" :key="`answer-${index}`">{{ answer }}</option>
            </select>
          </div>

          <!-- <input type="file" class="file" > -->
          <!-- <label>category</label> -->
          <div class="input-field">
            <button type="submit" class="btn mt-5">Create Question</button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2"></div>
  </div>
</template>

<script>
import constants from "./includes/constants";
import axios from "axios";

const { API_URL } = constants;
export default {
  components: {
    name: "Questions"
  },
  data() {
    return {
      questionNumber: "",
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      answer: "",
      answers: ["A", "B", "C", "D"],
      token: "",
      category: "",
      difficulty: "",
      categories: ["Designer", "Developer"],
      difficulties: [
        "cadet",
        "sergeant",
        "lieutenant",
        "major",
        "general",
        "marshal"
      ],
      developerStacks: [
        "NODEJS",
        "JAVASCRIPT",
        "PHP",
        "LARAVEL",
        "PYTHON",
        "DJANGO",
        "RUBY",
        "MEAN STACK",
        "MERN STACK",
        "REACT JS",
        "VUE JS",
        "ANGULAR JS",
        ""
      ],
      designerStacks: ["FIGMA", "XD", "AVOCODE", "SKETCH", "PHOTOSHOP"]
    };
  },
  mounted() {
    const userData = sessionStorage.getItem("userData");
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(sessionStorage.userData);
    this.token = token;
  },
  methods: {
    questions: function() {
      axios
        .post(
          `${API_URL}/assessment/questions`,
          {
            testId: this.testId,
            question: this.question,
            optionA: this.optionA,
            optionB: this.optionB,
            optionC: this.optionC,
            optionD: this.optionD,
            answer: this.answer,
            category: this.category,
            difficulty: this.difficulty
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
          if (res.error) this.error = "Unable to create Question";
          else {
            sessionStorage.setItem("userData", JSON.stringify(res.data));
            this.$router.push("questions");
          }
        })
        .catch(err => console.log(err))
        .finally((this.loading = false));
    }
  }
};
</script>
<style scope>
.mar-left {
  margin-left: 0px !important;
}
.display {
  display: none;
}
</style>

