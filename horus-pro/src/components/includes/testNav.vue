<template>
  <div class="dropdown">
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</template>
   
    
   
   
   <style>
</style>
   <script>
export default {
  name: "testNav",
  props: {
    active: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      open: false
  }
  },
  computed: {
	  opened: function(){
		  return this.open
	  }
  },
  mounted() {
    const userData = sessionStorage.userData;
    if (!userData) this.$router.push("/");
    const { token } = JSON.parse(userData);
    this.token = token;
    console.log(token);
  }
};
</script>
