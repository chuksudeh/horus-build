<template>
  <div id="test">
    <div class="header">
      <div class="mt-4">
        <span class="font3">{{category}} Assessment</span>
        <!-- <span style="color:white">{{reactTime}}</span> -->
        <!-- <span class="font3">I have just been created {{time}}</span> -->
        <br>
        <!-- <span style="margin-left: 300px" id="timer" class="timer">{{this.minutes}} : {{this.seconds}}</span> -->
        <span class="font2">
          <i class="fas fa-star"></i>
          {{difficulty}}
        </span>
      </div>
    </div>

    <div class="container mt-55" style="size:40%">
      <!-- <timer date="August 22, 2017"></timer> -->
      <span style="font-size: 30px; font-family:cali">Stack:</span>
      <span style="font-weight:bold; font-size:30px; font-family:cali">{{stack.name}}</span>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

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
</style>
