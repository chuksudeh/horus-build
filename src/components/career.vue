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
                        class="form-control control has-icon has-icon-right"
                        id
                        name="firstName"
                        placeholder="First Name"
                        v-validate="'required|alpha'"
                        :class="{'input': true, 'is-danger': errors.has('firstName') }"
                      >
                    </div>
                    <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
                    <span
                      v-show="errors.has('firstName')"
                      class="help is-danger"
                    >{{ errors.first('firstName') }}</span>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group __form-group">
                      <span class="font">Last Name</span>
                      
                      <input
                        type="text"
                        v-model="lastName"
                        class="form-control has-icon has-icon-right"
                        name="lastName"
                        placeholder="Last Name"
                        v-validate="'required|alpha'"
                        :class="{'input': true, 'is-danger': errors.has('lastName') }"
                      >
                    </div>
                    <i v-show="errors.has('lastName')" class="fa fa-warning"></i>
                    <span
                      v-show="errors.has('lastName')"
                      class="help is-danger"
                    >{{ errors.first('lastName') }}</span>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Email</span>
                      
                      <input
                        name="email"
                        v-model="email"
                        v-validate="'required|email'"
                        class="form-control"
                        :class="{'input': true, 'is-danger': errors.has('email') }"
                        type="text"
                        placeholder="Email"
                      >
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span
                        v-show="errors.has('email')"
                        class="help is-danger"
                      >{{ errors.first('email') }}</span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Phone Number</span>
                      
                      <input
                        type="text"
                        v-model="phoneNumber"
                        class="form-control"
                        name="phoneNumber"
                        id
                        placeholder="Phone Number"
                        v-validate="'required|numeric'"
                        :class="{'input': true, 'is-danger': errors.has('phoneNumber') }"
                      >
                      <i v-show="errors.has('phoneNumber')" class="fa fa-warning"></i>
                      <span
                        v-show="errors.has('phoneNumber')"
                        class="help is-danger"
                      >{{ errors.first('phoneNumber') }}</span>
                    </div>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">I am a</span>
                      <br>

                      <select
                        name="category"
                        class="form-control"
                        v-model="category"
                        v-validate="'required'"
                        required
                      >
                        <option
                          v-for="(category, index) in categories"
                          :key="`category-${index}`"
                          :has-error="errors.has('category')"
                        >{{ category }}</option>
                      </select>
                      <span v-show="errors.has('category')">{{ errors.first('category') }}</span>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">Stack</span>
                      <br>
                      <div v-if="category == 'Developer'">
                        <select
                          name="developerStack"
                          class="form-control"
                          v-model="stack"
                          :disabled="!category"
                          v-validate="'required'"
                          required
                        >
                          <option
                            v-for="(stack,index) in this.developerStack"
                            :key="`stack-${index}`"
                            v-bind:value="{id:stack.id, name: stack.name}"
                          >{{stack.name}}</option>
                        </select>
                        <span
                          v-show="errors.has('developerStack')"
                        >{{ errors.first('developerStack') }}</span>
                      </div>
                      <div v-else>
                        <select
                          class="form-control"
                          name="designerStack"
                          v-model="stack"
                          v-validate="'required'"
                          required
                        >
                          <option
                            v-for="(stack,index) in this.designerStack"
                            :key="`stack-${index}`"
                            v-bind:value="stack.id"
                          >{{stack.name}}</option>
                        </select>
                        <span
                          v-show="errors.has('designerStack')"
                        >{{ errors.first('designerStack') }}</span>
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
                        name="others"
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
                        v-validate="'required'"
                      >
                        <option
                          v-for="(difficultyHorus, index) in difficultiesHorus"
                          :key="`difficultyHorus-${index}`"
                        >{{ difficultyHorus }}</option>
                      </select>
                      <span
                        v-show="errors.has('difficultyHorus')"
                      >{{ errors.first('difficultyHorus') }}</span>
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
                      <select
                        name="country"
                        v-model="country"
                        class="form-control __width"
                        v-validate="'required'"
                      >
                        <option
                          v-for="(country, index) in countries"
                          :key="`country-${index}`"
                        >{{ country }}</option>
                      </select>
                      <span v-show="errors.has('country')">{{ errors.first('country') }}</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">State</span>
                      <input
                        type="text"
                        v-model="state"
                        class="form-control"
                        name="state"
                        placeholder="State"
                        v-validate="'required|alpha'"
                        :class="{'input': true, 'is-danger': errors.has('state') }"
                      >
                    </div>
                    <i v-show="errors.has('state')" class="fa fa-warning"></i>
                    <span
                      v-show="errors.has('state')"
                      class="help is-danger"
                    >{{ errors.first('state') }}</span>
                  </div>

                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <span class="font">City</span>
                      
                      <input
                        type="text"
                        class="form-control"
                        name="city"
                        v-model="city"
                        placeholder="City"
                        v-validate="'required|alpha'"
                        :class="{'input': true, 'is-danger': errors.has('city') }"
                      >
                    </div>
                    <i v-show="errors.has('city')" class="fa fa-warning"></i>
                    <span
                      v-show="errors.has('city')"
                      class="help is-danger"
                    >{{ errors.first('city') }}</span>
                  </div>
                </div>

                <div class="row __row-width __height">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Gender</span>
                      <br>
                      <select
                        name="gender"
                        class="form-control __width"
                        v-model="gender"
                        v-validate="'required'"
                      >
                        <option
                          v-for="(gender, index) in genders"
                          :key="`gender-${index}`"
                        >{{ gender }}</option>
                      </select>
                    </div>
                    <span v-show="errors.has('gender')">{{ errors.first('gender') }}</span>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <span class="font">Website/Portfolio</span>
                      
                      <input
                        type="text"
                        class="form-control"
                        v-model="website"
                        name="website"
                        placeholder="Website/Portfolio"
                        v-validate="'required|alpha'"
                        :class="{'input': true, 'is-danger': errors.has('website') }"
                      >
                    </div>
                    <i v-show="errors.has('website')" class="fa fa-warning"></i>
                    <span
                      v-show="errors.has('website')"
                      class="help is-danger"
                    >{{ errors.first('website') }}</span>
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
                    <i v-show="errors.has('file')" class="fa fa-warning"></i>
                    <span
                      v-show="errors.has('file')"
                      class="help is-danger"
                    >{{ errors.first('file') }}</span>
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
                  class="btn __cartat"
                >Take Assesment Test</button>
                <!-- <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p> -->
                <!-- <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p> -->
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
// import '../../static/libraries/bootstrap/js/bootstrap.min.js'
import axios from "axios";
import constants from "./includes/constants.js";
const { API_URL } = constants;
// import Vue from "vue";
// import Vuex from "vuex";
import { countries } from "../shared";

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
        "Cadet (0-1 Year)",
        "Sergeant (2-3 Years)",
        "Lieutenant (4-5 Years)",
        "Major (6-7 Years)",
        "General (8-9 Years)",
        "Marshal (10+ Years)"
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
      modalShow: false,
      difficultyHorus: "",
      region: "",
      state: "",
      city: "",
      // errors: [],
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
  created() {
    // this.$validator.extend("maxdimensions", maxDimensionsRule);
  },
  mounted() {
    let particles = document.createElement("script");
    particles.setAttribute("src", "../../static/js/js/particles.js");
    document.head.appendChild(particles);
    sessionStorage.clear();

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
      });
  },
  methods: {
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
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          // const file = this.$refs.file.files[0];

          // if (!file) {
          //   e.preventDefault();
          //   alert("No file chosen");
          //   return;
          // }

          // if (file.size > 1024 * 1024) {
          //   e.preventDefault();
          //   alert("File too big (> 1MB)");
          //   return;
          // }

          // alert("File OK");
          // do your submit logic here
          const index = this.difficultiesHorus.indexOf(this.difficultyHorus);
          this.difficulty = this.difficulties[index];

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

          const fd = new FormData();
          if (this.selectedFile) {
            fd.append("cv", this.selectedFile);
          }
          fd.append("fullname", this.firstName + this.lastName);
          fd.append("email", this.email);
          fd.append("phone", this.phoneNumber);
          fd.append("expertise", this.category);
          fd.append("external_url", this.website);
          fd.append("profile_url", this.skype);
          fd.append("country", this.country);
          fd.append("state", this.state);
          fd.append("city", this.city);
          fd.append("tools", this.expertise);
          fd.append("years_of_experience", this.difficultyHoruspos);
          fd.append("approach", this.stack);
          fd.append("gender", this.gender);
          fd.append("difficulty", this.difficulty);

          axios.post("https://www.findworka.com/pro/join", fd).then(res => {
            // this.error = res.data.data.error
          });
          // this.submitStatus = "PENDING";
          // setTimeout(() => {
          //   this.submitStatus = "OK";
          // }, 500);
          this.$router.push("/develo");
        }
        // alert("Form Submitted!");
        return;
      });
    }
  }
};
</script>

<style scoped>
@import "../../static/css/main.css";
@import "../../static/css/checkbox.css";
@import "../../static/css/index.css";
@import url("https://fonts.googleapis.com/css?family=Poppins");
.whole_body {
  margin-left: 2px !important;
  width: 100% !important;
  font-family: poppins !important;
}
.t-align {
  text-align: center;
}

.__row-width {
  width: 100%;
}
</style>
