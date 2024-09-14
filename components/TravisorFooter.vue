<template>
  <div>
    <section class="my-10">
      <div class="footerContainer">
        <div class="socialIcon">
          <div class="primary rounded-circle">
            <v-icon class="white--text pa-1" size="24">mdi-facebook</v-icon>
          </div>
          <div class="primary rounded-circle mx-2">
            <v-icon class="white--text pa-1" size="24">mdi-instagram</v-icon>
          </div>
          <div class="primary rounded-circle">
            <v-icon class="white--text pa-1" size="24">mdi-twitter</v-icon>
          </div>
        </div>
        <div class="footerbottom">
          <p class="pa-0 ma-0">
            Copyright &copy; Travisor.com All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.footer {
  background-color: #ffffff !important;
}
.footerContainer {
  width: 100%;
  height: 100%;
}

.socialIcon {
  display: flex;
  justify-content: center;
}

.footerbottom p {
  text-align: center;
  color: #f4931e;
}
</style>
