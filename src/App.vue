<template>
  <div id="app" class="wrapper">
      <navbar/>
      <sidebar/>
      <div class="content-wrapper">
        <router-view/>
      </div>
    <main-footer/>
    <right-sidebar/>
  </div>
</template>

<script>
  import Navbar from '@/components/ui/Navbar'
  import Sidebar from '@/components/ui/Sidebar'
  import MainFooter from '@/components/ui/MainFooter'
  import RightSidebar from '@/components/ui/RightSidebar'

  export default {
    components: {
      Navbar,
      Sidebar,
      MainFooter,
      RightSidebar
    }
  }
</script>
