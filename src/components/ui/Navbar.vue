<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-container>
        <div class="navbar-translate">
          <b-navbar-brand href="#" class="title">NavBar</b-navbar-brand>
          <span class="time">Thursday, 27 May 2021</span>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="mt-3 mt-lg-0" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form :class="{'custom-nav-form': true, 'input-group-nav': focus}">
              <b-input-group size="md">
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input type="search" placeholder="Search for food coffe etc..." @focus="focus = true" @blur="focus = false"></b-form-input>
              </b-input-group>
            </b-nav-form>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto"><b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button></b-navbar-nav>
        </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      focus: false
    }
  }
}
</script>
