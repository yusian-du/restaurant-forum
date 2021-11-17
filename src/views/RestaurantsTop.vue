<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{ name: 'restaurant', params: {id: restaurant.id }}">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 8,
            "name": "Bradley Hansen",
            "tel": "1-653-737-3374",
            "address": "9311 Rita Locks",
            "opening_hours": "08:00",
            "description": "Qui aliquid itaque itaque et ut recusandae velit q",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.66778164759013",
            "viewCounts": 8,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-14T12:48:52.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [
                {
                    "id": 21,
                    "name": "123123",
                    "email": "lllxz@outlook.com",
                    "password": "$2a$10$tpRNfK/rKPZLM514hUUjKOznSa48cKzF5KlAdEINlRQtAEzXHFOZC",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-02T12:20:39.000Z",
                    "updatedAt": "2021-11-02T12:20:39.000Z",
                    "Favorite": {
                        "UserId": 21,
                        "RestaurantId": 8,
                        "createdAt": "2021-11-02T12:22:04.000Z",
                        "updatedAt": "2021-11-02T12:22:04.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 8,
                        "createdAt": "2021-11-13T07:16:14.000Z",
                        "updatedAt": "2021-11-13T07:16:14.000Z"
                    }
                }
            ],
            "isFavorited": false,
            "FavoriteCount": 2
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
            "FavoritedUsers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-27T05:23:52.000Z",
                    "Favorite": {
                        "UserId": 1,
                        "RestaurantId": 4,
                        "createdAt": "2021-11-02T09:11:51.000Z",
                        "updatedAt": "2021-11-02T09:11:51.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 4,
                        "createdAt": "2021-11-13T14:41:39.000Z",
                        "updatedAt": "2021-11-13T14:41:39.000Z"
                    }
                }
            ],
            "isFavorited": true,
            "FavoriteCount": 2
        },
        {
            "id": 3,
            "name": "Gladyce Zulauf",
            "tel": "495-012-4903",
            "address": "7827 Hoppe Summit",
            "opening_hours": "08:00",
            "description": "Error dicta est vitae at voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.04765635982797",
            "viewCounts": 7,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-14T13:11:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-27T05:23:52.000Z",
                    "Favorite": {
                        "UserId": 1,
                        "RestaurantId": 3,
                        "createdAt": "2021-11-02T09:09:50.000Z",
                        "updatedAt": "2021-11-02T09:09:50.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 3,
                        "createdAt": "2021-11-14T15:15:14.000Z",
                        "updatedAt": "2021-11-14T15:15:14.000Z"
                    }
                }
            ],
            "isFavorited": true,
            "FavoriteCount": 2
        },
        {
            "id": 2,
            "name": "Dario Dickens Sr.",
            "tel": "1-566-833-7180 x557",
            "address": "123 Nolan Grove",
            "opening_hours": "08:00",
            "description": "Expedita asperiores qui. Possimus rerum amet vel v",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.20150144403091",
            "viewCounts": 11,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-13T09:47:30.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 2,
                        "createdAt": "2021-10-28T16:42:46.000Z",
                        "updatedAt": "2021-10-28T16:42:46.000Z"
                    }
                }
            ],
            "isFavorited": false,
            "FavoriteCount": 1
        },
        {
            "id": 1,
            "name": "Myrtice Rempel",
            "tel": "1-236-483-5268 x15726",
            "address": "73826 Witting Hollow",
            "opening_hours": "08:00",
            "description": "Enim velit dolores in.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.28664124510033",
            "viewCounts": 71,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-15T05:41:15.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-27T05:23:52.000Z",
                    "Favorite": {
                        "UserId": 1,
                        "RestaurantId": 1,
                        "createdAt": "2021-11-02T09:11:45.000Z",
                        "updatedAt": "2021-11-02T09:11:45.000Z"
                    }
                }
            ],
            "isFavorited": true,
            "FavoriteCount": 1
        },
        {
            "id": 50,
            "name": "Hadley Adams",
            "tel": "820.488.7695",
            "address": "497 Raymond Mews",
            "opening_hours": "08:00",
            "description": "Cum ex aut ducimus eos architecto. Est voluptatem ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.917667503022834",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Jalyn Abernathy Sr.",
            "tel": "1-282-367-2168 x0227",
            "address": "095 Pfeffer Villages",
            "opening_hours": "08:00",
            "description": "Est non voluptatem eum ex eum iure qui consectetur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.55166665098167",
            "viewCounts": 1,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-13T09:47:49.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Clair Gerlach",
            "tel": "1-144-441-9733 x306",
            "address": "42744 Freddie Path",
            "opening_hours": "08:00",
            "description": "Voluptas nam quibusdam et id. Ad veritatis laborum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.223574653888534",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Sedrick Harris",
            "tel": "227-627-3525 x317",
            "address": "66454 Larry Falls",
            "opening_hours": "08:00",
            "description": "Recusandae minima labore minima rerum cupiditate e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.79288322168647",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Nels Langworth",
            "tel": "430-621-9642 x432",
            "address": "9158 Gulgowski Terrace",
            "opening_hours": "08:00",
            "description": "Animi numquam dolor nesciunt architecto voluptates",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.73192743423605",
            "viewCounts": 0,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  name: 'RestaurantsTop',
  components: {
        NavTabs
   },
   data () {
     return {
       restaurants: []
     }
   },
   created () {
     this.fetchTopRestaurants()
   },
   methods: {
     fetchTopRestaurants () {
      this.restaurants = dummyData.restaurants
     },
     addFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant
        }
        return {
          ...restaurant,
          FavoriteCount: restaurant.FavoriteCount + 1,
          isFavorited: true
        }
      })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
        },
        deleteFavorite (restaurantId) {
            this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant
        }
        return {
          ...restaurant,
          FavoriteCount: restaurant.FavoriteCount - 1,
          isFavorited: false
        }
      })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
        }
   }
}
</script>