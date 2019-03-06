<template>
  <div class="container mt-4">
    <vue-headful title="Title from vue-headful" description="Description from vue-headful"/>
    <form action="POST" @submit.prevent="taketest">
      <!-- <h1>{{ message[0].name }}</h1> -->
      <label for="category" class="font">Category:</label>
      <select name="category" v-model="category" style="display: inline-block" class="width" id>
        <option v-for="(category, index) in categories" :key="`category-${index}`">{{ category }}</option>
      </select>
      <br>

      <div v-if="this.category == 'Developer'">
        <label for="stack" class="font">Stack:</label>
        <select style="display: inline-block" v-model="stack" class="width">
          <option
            @click="score('value')"
            v-for="(stack,index) in this.developerStack"
            :key="`stack-${index}`"
            v-bind:value="{id: stack.id, name: stack.name}"
          >{{stack.name}}</option>
        </select>
      </div>
      <div v-else>
        <label for="stack" class="font">Stack:</label>
        <select style="display: inline-block" v-model="stack" class="width">
          <option
            @click="score('value')"
            v-for="(stack,index) in this.designerStack"
            :key="`stack-${index}`"
            v-bind:value="{id: stack.id, name: stack.name}"
          >{{stack.name}}</option>
        </select>
      </div>

      <br>
      <label class="font" for="difficulty">Difficulty:</label>
      <select name="difficulty" v-model="difficulty" style="display: inline-block" class="width" id>
        <option
          v-for="(difficulty, index) in difficulties"
          :key="`difficulty-${index}`"
        >{{ difficulty }}</option>
      </select>
      <br>

      <br>
      <button class="btn __btnn btn-primary" @click="taketest()">Take Test</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import constants from "./includes/constants.js";
const { API_URL } = constants;
import Vue from "vue";
import Vuex from "vuex";
export default {
  components: {
    name: "category"
  },

  mounted() {
    const userData = sessionStorage.getItem("userData");
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(sessionStorage.userData);
    this.token = token;
    axios
      .get(`${API_URL}/assessment/getsubcategory`, {
        headers: {
          Authorization: "Bearer " + this.token
        }
      })
      .then(res => {
        this.subcategories = res.data.data;
        for (let i = 0; i < this.subcategories.length; i++) {
          if (this.subcategories[i].categoryId == 1) {
            this.developerStack.push({
              name: this.subcategories[i].name,
              id: this.subcategories[i].id
            });
          } else {
            this.designerStack.push({
              name: this.subcategories[i].name,
              id: this.subcategories[i].id
            });
          }
        }

        // this.subcategories.forEach(element => {

        // });
      });
    // console.log(this.stack);
  },

  data() {
    return {
      categoryId: [],
      catId: "",
      counter: 0,
      category: "",
      difficulty: "",
      categories: ["Designer", "Developer"],
      difficulties: [
        "Cadet",
        "Sergeant",
        "Lieutenant",
        "Major",
        "General",
        "Marshal"
      ],
      stack: "",
      subcategories: [],
      developerStack: [],
      designerStack: [],
      selectCategory: "",
      questions: []
    };
  },
  methods: {
    next: function() {
      console.log(this.counter);
      return (this.counter = this.counter + 1);
    },

    taketest: function() {
      //
      (this.$store.state.stack = this.stack),
        (this.$store.state.difficulty = this.difficulty),
        (this.$store.state.category = this.category);
      // axios
      //     .post(
      //       `${API_URL}/assessment/gquestions`,
      //       {
      //         stack: this.stack,
      //         difficulty: this.difficulty,
      //         category: this.category
      //       },
      //       {
      //         headers: {
      //           Authorization: "Bearer " + this.token
      //         }
      //       }
      //     )
      //     .then(res => {
      //       this.questions = res.data.data;
      // if (this.category === Developer) {
      this.$router.push("/devassessment");
      // } else this.$router.push("desassessment");
      //       console.log(this.questions);
      //       //   res = res.data;
      //       //   console.log(res);
      //       if (res.error) this.error = "Unable to save user category";
      //     });
    }
  },
  computed: {}
};
</script>

<style>
.width {
  width: 40%;
  color: black;
  background: purple;
  margin-top: 58px;
  height: 70px;
}
.mt-5 {
  margin-top: 250px;
}
.__btn {
  border-radius: 43px;
  width: 117px;
  font-size: 19px;
  background: purple;
  font-family: poppins;
}
.__btn:hover {
  text-decoration: underline;
}
</style>
