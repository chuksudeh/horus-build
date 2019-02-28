<template>
  <div :style="myStyle" class="whole_body">
    <div id="particles-js" class="__careerparticleshe">
      <nav class="navbar __navbgc" role="navigation">
        <div class="contain">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <span class>MENU</span>
            </button>
            <a class="navbar-brand" @click="pro">
              <img src="../../static/img/img/prologo.png" class="__flogo">
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav __navab __block">
              <li class="__nava">
                <a class="__nav-item" href="https://www.findworka.com/talents">Extend Your Team</a>
              </li>
              <li class="__nava">
                <a class="__nav-item active" href="https://horus.findworka.com">Become a Pro</a>
              </li>
            </ul>
            <!-- <form class="navbar-form navbar-left" role="search">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Search">
                                        </div>
                                        <button type="submit" class="btn btn-default">Submit</button>
            </form>-->
            <ul class="nav navbar-nav navbar-right __block">
              <li class="__nava">
                <a class="__nav-item" @click="home">Home</a>
              </li>
              <li class="__nava">
                <a class="__nav-item" href="https://www.findworka.com/about-us">About</a>
              </li>
              <li class="__navac">
                <a class="__nav-item" href="https://www.findworka.com/contact-us">Contact</a>
              </li>
              <li class="__navsignbg">
                <a href="#" class="__navsign1">Sign in</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </nav>
    </div>
    <div class="container">
      <div class="__care">
        <p class>Career</p>

        <p class>Join Findworka and help build the future of work.</p>
      </div>
    </div>

    <section>
      <div class="container __mtt">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2"></div>
          <div class="col-lg-8 col-md-8 col-sm-8 __mtt">
            <p class="__whycho-car mt-5">Join Our PRO Talents</p>
            <p
              class="__whysoft"
            >Software is an essential tool for every business in the world, yet most don't have access to quaility development at a reasonable cost. We aim to put a software development team in everyone's pocket. We are building the largest network of exceptional developers, designers and augmenting them with data, artificial intelligence, and a rich working environment.</p>
            <br>
            <form action="POST" @submit.prevent="submitForm" enctype="multipart/form-data">
              <div class="pop">
                <div class="row __row-width">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group __form-group">
                      <span class="font">First Name</span>
                      
                      <input
                        type="text"
                        v-model="firstName"
                        class="form-control"
                        id
                        placeholder="First Name"
                        v-model.trim="firstName"
                        @input="setFirst($event.target.value)"
                      >
                    </div>
                    <div class="error" v-if="!$v.firstName.required">Field is required</div>
                    <div
                      class="error"
                      v-if="!$v.firstName.minLength"
                    >First Name must have at least {{$v.firstName.$params.minLength.min}} letters.</div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group __form-group">
                      <span class="font">Last Name</span>
                      
                      <input
                        type="text"
                        v-model="lastName"
                        class="form-control"
                        id
                        placeholder="Last Name"
                        v-model.trim="$v.lastName.$model"
                      >
                    </div>
                    <div class="error" v-if="!$v.lastName.required">Field is required</div>
                    <div
                      class="error"
                      v-if="!$v.lastName.minLength"
                    >Last Name must have at least {{$v.lastName.$params.minLength.min}} letters.</div>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Email</span>
                      
                      <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        id
                        placeholder="Email"
                      >
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Phone Number</span>
                      
                      <input
                        type="number"
                        v-model="phoneNumber"
                        class="form-control"
                        id
                        placeholder="Phone Number"
                      >
                    </div>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">I am a</span>
                      <br>

                      <select name="category" class="form-control" v-model="category">
                        <option
                          v-for="(category, index) in categories"
                          :key="`category-${index}`"
                        >{{ category }}</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">Stack</span>
                      <br>
                      <div v-if="category == 'Developer'">
                        <select class="form-control" v-model="stack" :disabled="!category">
                          <option
                            v-for="(stack,index) in this.developerStack"
                            :key="`stack-${index}`"
                            v-bind:value="{id:stack.id, name: stack.name}"
                          >{{stack.name}}</option>
                        </select>
                      </div>
                      <div v-else>
                        <select class="form-control" v-model="stack">
                          <option
                            v-for="(stack,index) in this.designerStack"
                            :key="`stack-${index}`"
                            v-bind:value="stack.id"
                          >{{stack.name}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="form-group">
                          <span class="font">Please Specify</span>
                          <br>
                          <div v-if="stack== 0">
                            <input type="text" class="form-control" placeholder="Please Specify">
                          </div>
                        </div>
                  </div>-->
                  <div v-if="stack == 0" class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">Others</span>
                      <br>
                      <input
                        type="text"
                        class="form-control"
                        v-model="others"
                        placeholder="Please Specify"
                      >
                    </div>
                  </div>
                  <div v-else class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">Level of Expertise</span>
                      <br>
                      <select
                        name="difficultyHorus"
                        class="form-control"
                        v-model="difficultyHorus"
                        style="display: inline-block"
                      >
                        <option
                          v-for="(difficultyHorus, index) in difficultiesHorus"
                          :key="`difficultyHorus-${index}`"
                        >{{ difficultyHorus }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- <div v-show="this.stack.name == 'Others'" class="row __row-width __height">
                      <div class="col-lg-4"></div>
                      <div class="col-lg-4">
                        <input type="text" class="form-group" placeholder="Please Specify">
                      </div>
                      <div class="col-lg-4"></div>
                </div>-->
                <div class="row __row-width __height">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span for="country" class="font">Country</span>
                      <select name="country" v-model="country" class="form-control __width">
                        <option
                          v-for="(country, index) in countries"
                          :key="`country-${index}`"
                        >{{ country }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">State</span>
                      <input
                        type="text"
                        v-model="state"
                        class="form-control"
                        id
                        placeholder="State"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">City</span>
                      
                      <input type="text" class="form-control" v-model="city" placeholder="City">
                    </div>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Gender</span>
                      <br>
                      <select name="gender" class="form-control __width" v-model="gender">
                        <option
                          v-for="(gender, index) in genders"
                          :key="`gender-${index}`"
                        >{{ gender }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Website/Portfolio</span>
                      
                      <input
                        type="text"
                        class="form-control"
                        v-model="website"
                        placeholder="Website/Portfolio"
                      >
                    </div>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Resume</span>
                      <br>

                      <input
                        type="file"
                        name="file"
                        @change="uploadFile1"
                        class="form-control"
                        placeholder="Resume"
                      >
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 __br">
                    <div class="form-group">
                      <span class="font">Skype ID</span>
                      <br>

                      <input
                        type="text"
                        class="form-control"
                        v-model="skype"
                        placeholder="Skype ID"
                      >
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  :disabled="submitStatus === 'PENDING'"
                  class="btn __cartat"
                >Take Assesment Test</button>
                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
              </div>
            </form>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2"></div>
        </div>
      </div>

      <div class="__how __mttt pop">
        <div class="container __container">
          <p class="__fonter">How It Works</p>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="__asscard">
                <p class="font-re">
                  <span>1</span>
                  Assessment Test
                </p>
                <p>You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="__asscard1">
                <p>
                  <span>2</span>&nbsp;&nbsp;Physical Interview
                </p>
                <p>You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.You shouldn't worry. We understand that to become an expert, you need
                  <br>to keep practising, learning, sharing and collaborating. Thst is why we have the Findworka academy to hrlp you grow.
                </p>
              </div>
            </div>
          </div>
          <p class="__carlevel">
            <img src="../../static/img/img/medal.svg">&nbsp;&nbsp;Level Of Expertise
          </p>
          <div class="row pop __grid">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="__levelbadge">
                <p>
                  Cadet &nbsp;
                  <span class="span">(1 Star)</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </p>
                <p>Working Experience of 0-6 months with
                  <br>reliable link portfolio
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="__levelbadge">
                <p>
                  Sergent &nbsp;
                  <span class="span">(2 Star)</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </p>
                <p>Working Experience of 0-6 months with
                  <br>reliable link portfolio
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="__levelbadge">
                <p>
                  Lieutenat &nbsp;
                  <span class="span">(3 Star)</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </p>
                <p>Working Experience of 0-6 months with
                  <br>reliable link portfolio
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="__levelbadge">
                <p>
                  Major &nbsp;
                  <span class="span">(4 Star)</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </p>
                <p>Working Experience of 0-6 months with
                  <br>reliable link portfolio
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="__levelbadge">
                <p>
                  General &nbsp;
                  <span class="span">(5 Star)</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </p>
                <p>Working Experience of 0-6 months with
                  <br>reliable link portfolio
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="__levelbadge">
                <p>
                  Marshall &nbsp;
                  <span class="span">(6 Star)</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </p>
                <p>Working Experience of 0-6 months with
                  <br>reliable link portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container __how2 __grid2">
        <div class="__joinpro">
          <p>Not A Pro Yet?</p>
          <p>You shouldn't worry. We understand that to become an expert, you need to keep practising, learning, sharing and collaborating.
            <br>That is why we have the Findworka academy to help you grow.
          </p>
          <button type="button" class="btn">Join Our Academy</button>
        </div>
      </div>
    </section>

    <footer class="__procareeftbg __how3">
      <div class="container pop">
        <div class="row __dowt">
          <div class="col-md-10 col-sm-11">
            <div class="row">
              <div class="col-md-3 col-sm-3">
                <img src="../../static/img/img/prologo.png" class="__flogo">
              </div>
              <div class="col-md-3 col-sm-3">
                <h4 class="__footin">
                  <b>PLATFORM</b>
                </h4>
                <br>
                <p>
                  <a href="https://www.findworka.com/talents">Extend Your Team</a>
                </p>
                <p>
                  <a href="pro.html" @click="pro">Findworka Pro</a>
                </p>
                <p>
                  <a href="http://saucecode.xyz/" target="_blank">Saucecode community</a>
                </p>
                <p>
                  <a href="findworka_felloship.html">Findworka Academy</a>
                </p>
                <p>
                  <a href="findworka_mentor.html">Findworka Mentor</a>
                </p>
              </div>
              <div class="col-md-3 col-sm-2">
                <h4 style="font-family:poppins !important" class="__footin pop">
                  <b>FINDWORKA</b>
                </h4>
                <br>
                <p>
                  <a @click="home">Home</a>
                </p>
                <p>
                  <a href="https://www.findworka.com/about-us">About</a>
                </p>
                <p>
                  <a href="https://www.findworka.com/contact-us">Contact</a>
                </p>
              </div>
              <div class="col-md-3 col-sm-4">
                <h4 class="__footin">
                  <b>INFORMATION</b>
                </h4>
                <br>
                <p>
                  <a href="terms.html">Terms and conditions</a>
                </p>
                <p>
                  <a href="privacy.html">Privacy policy</a>
                </p>
                <p>
                  <a href="#">FAQ</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-1">
            <div class="row">
              <div class="col-xs-4 col-sm-2"></div>
              <div class="col-xs-4 col-sm-8">
                <h4 class="__footin">
                  <b>FOLLOW US</b>
                </h4>
                <br>
                <p class="__fotimg">
                  <a href="https://twitter.com/findworka">
                    <img src="../../static/img/img/twitterblack.svg">
                  </a>
                </p>
                <p class="__fotimg">
                  <a href="https://www.facebook.com/findworka">
                    <img src="../../static/img/img/facebookblack.svg">
                  </a>
                </p>
                <p class="__fotimg">
                  <a href="https://www.linkedin.com/company/findworka/">
                    <img src="../../static/img/img/linkedinblack.svg">
                  </a>
                </p>
              </div>
              <div class="col-xs-4 col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// console.log(`this is ${this.$router.path}`);

import axios from "axios";
import constants from "./includes/constants.js";
const { API_URL } = constants;
// import Vue from "vue";
// import Vuex from "vuex";
import { countries } from "../shared";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  name: "career",
  data() {
    return {
      myStyle: {
        backgroundColor: "#fff"
      },
      categories: ["Designer", "Developer"],
      category: "",
      difficulty: "",
      difficultiesHorus: [
        "Cadet (1-3 Years)",
        "Sergeant (4-5 Years)",
        "Lieutenant (6-7 Years)",
        "Major (8-9 Years)",
        "General (10-11 Years)",
        "Marshal (12-15 Years)"
      ],
      difficulties: [
        "Cadet",
        "Sergeant",
        "Lieutenant",
        "Major",
        "General",
        "Marshal"
      ],
      countries: [...countries],
      selectedFile: null,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      regions: "",
      country: "",
      difficultyHorus: "",
      region: "",
      state: "",
      city: "",
      errors: [],
      genders: ["Male", "Female"],
      gender: "",
      website: "",
      skype: "",
      stack: "null",
      subcategories: [],
      developerStack: [],
      designerStack: [],
      fd: "",
      others: "",
      mainstack: "",
      submitStatus: null
    };
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(4)
    },
    lastName: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },
  mounted() {
    let particles = document.createElement("script");
    particles.setAttribute("src", "../../static/js/js/particles.js");
    document.head.appendChild(particles);
    // const userData = sessionStorage.getItem("userData");
    // // if (!userData) this.$router.push("/");
    // const { token } = JSON.parse(sessionStorage.userData);
    // this.token = token;
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
            if (i == this.subcategories.length - 1) {
              this.developerStack.push({
                name: "Others",
                id: 0
              });
              this.designerStack.push({
                name: "Others",
                id: 0
              });
            }
          } else if (this.subcategories[i].categoryId == 2) {
            this.designerStack.push({
              name: this.subcategories[i].name,
              id: this.subcategories[i].id
            });
          }
        }

        // this.subcategories.forEach(element => {

        // });
      });
  },
  methods: {
    setName(value) {
      this.firstName = value;
      this.$v.firstName.$touch();
    },
    checkForm: function(e) {
      if (this.firstName) {
        return true;
      }

      this.errors = [];

      if (!this.firstName) {
        this.errors.push("First Name required.");
      }
      if (!this.lastName) {
        this.errors.push("Name required.");
      }
      // if (!this.age) {
      //   this.errors.push('Age required.');
      // }

      e.preventDefault();
    },
    uploadFile1(event) {
      this.selectedFile = event.target.files[0];
    },
    home() {
      this.$router.push("/career");
    },
    pro() {
      this.$router.push("/probody");
    },
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        const index = this.difficultiesHorus.indexOf(this.difficultyHorus);
        // console.log(this.difficultiesHorus[0]);
        this.difficulty = this.difficulties[index];
        // console.log(this.difficultyHorus);
        // const cv = new FormData(this.selectedFile);

        (this.$store.state.difficulty = this.difficulty),
          (this.$store.state.category = this.category);
        this.$store.state.stack = this.stack;
        const { stack, category, difficulty } = this;
        sessionStorage.setItem(
          "assessment",
          JSON.stringify({
            stack,
            category,
            difficulty
          })
        );
        this.$router.push("/devassessment");
        // console.log("submitted");

        const fd = new FormData();
        if (this.selectedFile) {
          fd.append("cv", this.selectedFile);
        }
        fd.append("fullname", "chukwudi");
        fd.append("email", "chucks@gmail.com");
        fd.append("phone", 204);
        fd.append("expertise", "developer");
        fd.append("external_url", "www.google.com");
        fd.append("profile_url", "www.github.com");
        fd.append("country", "nig");
        fd.append("state", "enugu");
        fd.append("city", "lagos");
        fd.append("tools", "nodejs");
        fd.append("years_of_experience", "5");

        // fd.append("stack", this.stack);
        // fd.append("difficulty", this.difficulty);
        // fd.append("category", this.category);
        // fd.append("surname", this.surname);
        // fd.append("otherName", this.otherName);
        // fd.append("email", this.email);
        // fd.append("phoneNumber", this.phoneNumber);
        // fd.append("country", this.country);
        // fd.append("state", this.state);
        // fd.append("city", this.city);
        // fd.append("gender", this.gender);
        // fd.append("website", this.website);
        // fd.append("skype", this.skype);

        axios.post("https://www.findworka.com/pro/join", fd).then(res => {
          // console.log(res);
          // console.log("posted successfully");
        });
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }

      // console.log(this.selectedFile);

      // axios
      //   .post(
      //     "https://cors-anywhere.herokuapp.com/https://www.findworka.com/pro/join",
      //     {
      //       cv: cv,
      //       fullname: "chukwudi udeh",
      //       email: "chuckseveristusad7@gmail.com",
      //       phone: 244,
      //       expertise: "developer",
      //       external_url: "www.google.com",
      //       profile_url: "www.github.com",
      //       years_of_experience: 3
      //     }
      //   )
      //   .then(res => {
      //     console.log(res);
      //   });
      //   },
      // taketest: function() {

      //     // e.preventDefault();
      // console.log(this.selectedFile);
      // const hello = new FormData(this.selectedFile);
      // // fd.append("resume", this.selectedFile);
      // console.log(hello);

      // this.submitStatus = "PENDING";
      // setTimeout(() => {
      //   this.submitStatus = "OK";
      // }, 500);
    }
  }
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
@import "../../static/css/main.css";
@import "../../static/css/checkbox.css";
@import "../../static/css/index.css";
@import url("https://fonts.googleapis.com/css?family=Poppins");
.whole_body {
  margin-left: 2px !important;
  width: 100% !important;
  font-family: poppins !important;
}
/* .forma-group {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} */
.t-align {
  text-align: center;
}

.__row-width {
  width: 100%;
}
/* .contain {
  width: 100%;
}
.__block {
  display: block;
} */
</style>
