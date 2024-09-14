<template>
  <div>
    <div class="mission d-flex align-center justify-center">
      <v-row class="accent d-flex align-center justify-center px-16 mb-10">
        <div
          class="col-lg-8 col-md-12 col-sm-12 col-sx-12 mission-content-side"
        >
          <div class="mission-content">
            <h1 class="mb-5">Our Mission</h1>
            <p class="pr-10 mr-10">
              Our mission is to empower travelers by providing a seamless and
              personalized platform that caters to their unique needs and
              desires. We aim to revolutionize the way people plan, book, and
              share their travel experiences. By leveraging technology and
              incorporating user feedback, we strive to offer a comprehensive
              travel solution that streamlines the decision-making process,
              reduces the burden of logistics, and fosters a vibrant community
              of like-minded adventurers.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-12 col-sm-12 col-sx-12 d-flex align-center jsutify-center mission-img-side"
        >
          <img src="/images/our_mission.jpg" />
        </div>
      </v-row>
    </div>
  </div>
</template>

<script></script>

<style>
.mission h1 {
  color: #1bbc9b;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
}
.mission-img-side {
  width: 100%;
  height: auto;
}
.mission-img-side img {
  width: 430px;
  height: 300px;
  padding: 10px;
  border-radius: 20px;
}
.mission-content-side {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.mission-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-transform: none;
}
.mission-content h1 {
  font-weight: 800;
  font-size: 30px;
}
</style>
