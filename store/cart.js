export const state = () => ({
    products: [],
    empty: true,
    subtotal: null,
    total: null
})

export const getters = {
    products (state) {
        return state.products
    },

    count (state) {
      return state.products.length
    },

    empty (state) {
      return state.empty
    },

    subtotal (state) {
        return state.subtotal
    }
}

export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    },

    SET_EMPTY (state, empty) {
        state.empty = empty
    },

    SET_SUBTOTAL (state, subtotal) {
        state.subtotal = subtotal
    },

    SET_TOTAL (state, total) {
        state.total = total
    }
}

export const actions = {
    async getCart ({ commit }) {
        let response = await this.$axios.$get('cart')

        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)
        commit('SET_SUBTOTAL', response.meta.subtotal)

        return response
    },

    async destroy ({ commit, dispatch }, productId) {
        let response = await this.$axios.$delete(`cart/${productId}`)

        dispatch('getCart')
    },

    async update ({ dispatch }, { productId, quantity }) {
        let response = await this.$axios.$patch(`cart/${productId}`, {
            quantity
        })

        dispatch('getCart')
    }
}
