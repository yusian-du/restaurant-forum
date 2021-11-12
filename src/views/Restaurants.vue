<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Myrtice Rempel",
            "tel": "1-236-483-5268 x15726",
            "address": "73826 Witting Hollow",
            "opening_hours": "08:00",
            "description": "Enim velit dolores in.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.28664124510033",
            "viewCounts": 55,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-11T08:21:57.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 2,
            "name": "Dario Dickens Sr.",
            "tel": "1-566-833-7180 x557",
            "address": "123 Nolan Grove",
            "opening_hours": "08:00",
            "description": "Expedita asperiores qui. Possimus rerum amet vel v",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.20150144403091",
            "viewCounts": 8,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-10T00:59:23.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 3,
            "name": "Gladyce Zulauf",
            "tel": "495-012-4903",
            "address": "7827 Hoppe Summit",
            "opening_hours": "08:00",
            "description": "Error dicta est vitae at voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.04765635982797",
            "viewCounts": 3,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-11T16:38:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Eda Carter",
            "tel": "(067) 802-7379 x47783",
            "address": "21622 Amiya Dale",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.7593104092412881",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Alek Labadie",
            "tel": "831-876-5248 x31782",
            "address": "0439 Hammes Unions",
            "opening_hours": "08:00",
            "description": "omnis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.32250437970567",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 6,
            "name": "Santos Hills",
            "tel": "553-191-2308",
            "address": "78746 Weimann Union",
            "opening_hours": "08:00",
            "description": "Delectus et ea exercitationem recusandae delectus ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.36316738677164",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Mrs. Terrance Goldner",
            "tel": "(273) 548-0319",
            "address": "295 Gutmann Cove",
            "opening_hours": "08:00",
            "description": "fuga",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.279235663053367",
            "viewCounts": 1,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-08T17:38:10.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 8,
            "name": "Bradley Hansen",
            "tel": "1-653-737-3374",
            "address": "9311 Rita Locks",
            "opening_hours": "08:00",
            "description": "Qui aliquid itaque itaque et ut recusandae velit q",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.66778164759013",
            "viewCounts": 5,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-09T11:42:37.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Ezra Metz",
            "tel": "982.086.6236 x3942",
            "address": "73491 Goodwin Crossroad",
            "opening_hours": "08:00",
            "description": "Voluptas hic at rem. Similique occaecati libero re",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.59333981051594",
            "viewCounts": 1,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-09T11:42:42.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Logan Wolf V",
            "tel": "(129) 312-1031 x3330",
            "address": "010 Littel Track",
            "opening_hours": "08:00",
            "description": "rerum enim rerum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.281958268620492",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
    components: {
        NavTabs,
        RestaurantCard,
        RestaurantsNavPills,
        RestaurantsPagination
    },
    data () {
      return {
        restaurants: [],
        categories: [],
        categoryId: -1,
        currentPage: 1,
        totalPage: [],
        previousPage: -1,
        nextPage: -1
      }
    },
    created() {
      this.fetchRestaurant()
    },
    methods: {
      fetchRestaurant () {
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }
}
</script>