<template>
  <div id="create">
    <div class="container my-5">
      <h2 class="text-center">Create Question</h2>
      <div class="row">
        <div class="col-md-6 offset-md-3 __width">
          <form method="POST" @submit.prevent="upload" enctype="multipart/form-data">
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
              class="file"
              name="file"
            >

            <!-- <label>category</label> -->
            <div class="input-field">
              <button type="submit" v-on:click="submitFile()" class="btn mt-5">Create Question</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import constants from "./includes/constants";
import axios from "axios";
import readXlsxFile from 'read-excel-file'
const input = document.getElementById('input')
 
// input.addEventListener('change', () => {
//   readXlsxFile(input.files[0]).then((rows) => {
//     // `rows` is an array of rows
//     // each row being an array of cells.
//   })
// })
const { API_URL } = constants;
export default {
  components: {
    name: "upload"
  },
  data() {
    return {
      file: "",
      token: ""
    };
  },
  mounted() {
    const userData = sessionStorage.getItem("userData");
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(sessionStorage.userData);
    this.token = token;
  },
  methods: {
    handleFileUpload: function() {
      this.file = this.$refs.file.files[0];
    },
    submitFile: function() {
      let formData = new FormData();
      formData.append("file", this.file);

      axios
        .post(
          `${API_URL}/assessment/upload`,
          {
            file: this.file
          },
          {
            headers: {
              Authorization: "Bearer " + this.token
            }
          }
        )
        .then(res => {
          res = res.data;
          console.log(this.file);
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
<style>
.mt-5 {
  margin-top: 40px;
}
.display {
  display: none;
}
</style>

