<template>
  <div>
    <div id="particles-js">
      <nav class="navbar __navbgc" role="navigation">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <!-- <span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
              <span class="icon-bar"></span>-->
              <span class>MENU</span>
            </button>
            <a class="navbar-brand" href="index.html">
              <img src="assets/img/prologo.png" class="__flogo">
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav __navab">
              <li class="__nava">
                <a class="__nav-item" href="talent.html">Extend Your Team</a>
              </li>
              <li class="__nava">
                <a class="__nav-item active" href="pro.html">Become a Pro</a>
              </li>
            </ul>
            <!-- <form class="navbar-form navbar-left" role="search">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Search">
							</div>
							<button type="submit" class="btn btn-default">Submit</button>
            </form>-->
            <ul class="nav navbar-nav navbar-right">
              <li class="__nava">
                <a class="__nav-item" href="index.html">Home</a>
              </li>
              <li class="__nava">
                <a class="__nav-item" href="about.html">About</a>
              </li>
              <li class="__navac">
                <a class="__nav-item" href="contact.html">Contact</a>
              </li>
              <li class="__navsignbg">
                <a href="signup.html" class="__navsign1">Sign in</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </nav>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7 col-sm-9">
          <div class="__pro2">
            <p class="__pros1">Pre-Vetted Freelance
              <br>
              <span>Designers & Developers</span>
              <br>Handpick Yor You
            </p>

            <p
              class="__pros2"
            >By becoming a Findworka Pro, you get premium access to the best software design and development projects.</p>

            <a href class="btn __pro2btn1">Join our A-list</a>&nbsp;
            <a href class="btn __pro2btn2">Learn More</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-5 col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: proHeader
};
</script>

<style>
</style>
