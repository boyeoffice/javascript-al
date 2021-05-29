<template>
	<b-sidebar id="sidebar-right" title="Orders #648362" bg-variant="dark" text-variant="light" width="400px" right>
      <div class="px-3 py-2">
        <b-row class="my-3">
            <b-col>Item</b-col>
            <b-col cols="auto">
                <b-row>
                <b-col>Qty</b-col>
                <b-col>Price</b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mb-3">
            <b-col cols="8">
                <b-row>
                    <b-col cols="4">
                        <b-img v-bind="mainProps" rounded="circle"></b-img>
                    </b-col>
                    <b-col cols="auto align-self-center px-0">
                        <h6 class="mb-0">Spicy seasoned</h6>
                        <small>N1000</small>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="auto">
               <b-row>
                <b-col>4</b-col>
                <b-col>N1000</b-col>
               </b-row>
            </b-col>
            <div class="w-100 mb-3"></div>
            <b-col cols="9 pr-0">
                <b-form-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Order Note..."
                >
                </b-form-input>
            </b-col>
            <b-col cols="auto">
                <b-button variant="outline-danger" size="sm">
                    <b-icon-trash/>
                </b-button>
            </b-col>
        </b-row>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
</template>

<script>
export default {
    data () {
        return {
            mainProps: { blank: true, blankColor: '#777', width: 50, height: 50, class: 'm1' }
        }
    }
}
</script>
