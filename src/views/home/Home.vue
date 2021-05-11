<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2"></div>
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2" v-for="(data,index) in 10" :key="index">
            <div class="card c">
              <div class="top-sec">
                <img class="img-circle" src="https://via.placeholder.com/100" alt="">
              </div>
              <div class="card-body text-center">
                <h5>Spicy seasoned seafood noodles</h5>
                <div class="price">N1,000</div>
              </div>
              <div class="card-footer clearfix">
                <button class="btn btn-block btn-primary">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  //
  },
  data () {
    return {
      meals: []
    }
  },
  async mounted () {
    const newMeals = []
    for (let i; i < 1; i++) {
      newMeals.push({
        title: 'Spicy seasoned seafood noodles',
        price: '1,000'
      })
    }
    this.meals = await newMeals
  }
}
</script>

<style>
.c {
  margin-top: 30px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.1);
}

.c img {
  width: 100%;
  object-fit: cover;
  /* background-color: white; */
  box-shadow: 0 3px 20px 11px rgba(0, 0, 0, 0.09);
}

.c .top-sec {
  margin-top: -30px;
  margin-bottom: 15px;
  padding: 0 15px;
}
.c .price {
  font-size: 11px;
}
</style>
