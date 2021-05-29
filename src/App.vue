<template>
  <div id="app" class="wrapper">
      <navbar/>
      <b-container>
        <nav-pill/>
        <router-view/>
      </b-container>
  </div>
</template>

<script>
  import Navbar from '@/components/ui/Navbar'
  import NavPill from '@/components/ui/NavPill'
  // import Sidebar from '@/components/ui/Sidebar'
  // import MainFooter from '@/components/ui/MainFooter'
  // import RightSidebar from '@/components/ui/RightSidebar'

  export default {
    components: {
      Navbar,
      NavPill
    }
  }
</script>
