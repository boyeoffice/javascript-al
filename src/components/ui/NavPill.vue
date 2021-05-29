<template>
    <div class="mt-4 custom-nav-pill">
        <b-nav tabs>
            <b-nav-item active>Hot Dishes</b-nav-item>
            <b-nav-item>Cold Dishes</b-nav-item>
            <b-nav-item>Soup</b-nav-item>
            <b-nav-item>Grill</b-nav-item>
            <b-nav-item>Appetizer</b-nav-item>
            <b-nav-item>Desert</b-nav-item>
        </b-nav>
        <div class="content-top mt-5">
            <b-row>
                <b-col>
                    <h5>Choose Dishes</h5>
                </b-col>
                <b-col cols="auto">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selected: null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]
        }
    }
}
</script>
