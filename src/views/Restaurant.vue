<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
    :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
       />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
    name: 'Restaurant',
    components: {
        RestaurantDetail,
        RestaurantComments,
        CreateComment,
        Spinner
    },
    data () {
        return {
            restaurant: {
                id: -1,
                name: '',
                categoryName: '',
                image: '',
                openingHours: '',
                tel: '',
                address: '',
                description: '',
                isFavorited: false,
                isLiked: false
            },
            restaurantComments: [],
            isLoading: true
        }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    beforeUpdate (to ,from, next) {
      const { id } = to.params
      this.fetchRestaurant(id)
      next()
    },
     created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getRestaurants({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { restaurant, isFavorited, isLiked } = data
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments
        } = restaurant

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        }

        this.restaurantComments = Comments
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>