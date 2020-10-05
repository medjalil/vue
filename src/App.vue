<template>
  <div id="app">
     <b-navbar toggleable="lg" type="light" variant="light">
       <b-container>
    <b-navbar-brand to="/">ALLO TAXI</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Tableau de bord</b-nav-item>
        <b-nav-item to="/driver">Chauffeurs</b-nav-item>
        <b-nav-item to="/mission">Courses</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            Mohamed Abdeljalil
          </template>
          <b-dropdown-item href="#">Profil</b-dropdown-item>
          <b-dropdown-item href="#">Mot de passe</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
       </b-container>
  </b-navbar>
    
    <router-view />
  </div>
</template>

<style lang="scss">


</style>
