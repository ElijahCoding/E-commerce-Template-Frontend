<template>
    <nav class="navbar is-white">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    cart
                </nuxt-link>
                <div class="navbar-burger burger" data-target="nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {{ categories }}

            <div id="nav" class="navbar-menu">
              <div class="navbar-end">
                <a href="" class="navbar-item">
                  Sign in
                </a>
              </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                categories: 'categories'
            })
        }
    }
</script>
