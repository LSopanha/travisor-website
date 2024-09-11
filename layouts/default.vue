<template>
  <v-app>
    <v-app-bar class="accent d-flex pa-0" fixed app>
      <!-- Ensure no padding in the app-bar -->
      <travisor-nav-bar></travisor-nav-bar>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <v-container class="ma-0 pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <travisor-footer></travisor-footer>
  </v-app>
</template>
