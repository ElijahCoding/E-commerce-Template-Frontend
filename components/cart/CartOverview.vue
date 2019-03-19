<template>
    <table class="table is-hoverable is-fullwidth">
        <tbody>
            <CartOverviewProduct v-for="product in products"
                                 :product="product"
                                 :key="product.id"
                                 />
        </tbody>
    </table>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CartOverviewProduct from './CartOverviewProduct'

    export default {
        components: {
            CartOverviewProduct
        },

        computed: {
            ...mapGetters({
                products: 'cart/products'
            })
        }
    }
</script>
