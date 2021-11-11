<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'

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
            "viewCounts": 54,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-08T06:19:03.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            }
        },
        {
            "id": 2,
            "name": "Dario Dickens Sr.",
            "tel": "1-566-833-7180 x557",
            "address": "123 Nolan Grove",
            "opening_hours": "08:00",
            "description": "Expedita asperiores qui. Possimus rerum amet vel voluptatem repellat.",
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
            }
        },
        {
            "id": 3,
            "name": "Gladyce Zulauf",
            "tel": "495-012-4903",
            "address": "7827 Hoppe Summit",
            "opening_hours": "08:00",
            "description": "Error dicta est vitae at voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.04765635982797",
            "viewCounts": 2,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-11-10T00:59:18.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z"
            }
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
            }
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
            }
        },
        {
            "id": 6,
            "name": "Santos Hills",
            "tel": "553-191-2308",
            "address": "78746 Weimann Union",
            "opening_hours": "08:00",
            "description": "Delectus et ea exercitationem recusandae delectus omnis. Quis soluta dolores mollitia ut voluptas voluptatem. Dolore ut atque vero et. Quia tempora unde maxime. Illo est consequuntur.\n \rConsequatur laudantium sed est et pariatur aliquam ducimus. Voluptatem voluptas et ut placeat expedita. Voluptatem non provident enim ea est quo quisquam. Non aperiam explicabo eum ad quasi quos ipsum nulla ipsam. Beatae consequuntur voluptate architecto ad hic et qui odio. Quia neque qui praesentium non ea dolor.\n \rNesciunt facere amet et quis. Ut tempora tempora et molestiae eum totam ipsum voluptates quis. Quia eum consectetur maxime nobis nisi eveniet accusantium. Ea accusantium omnis iste possimus voluptatem expedita aspernatur repellat harum.",
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
            }
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
            }
        },
        {
            "id": 8,
            "name": "Bradley Hansen",
            "tel": "1-653-737-3374",
            "address": "9311 Rita Locks",
            "opening_hours": "08:00",
            "description": "Qui aliquid itaque itaque et ut recusandae velit quae ipsa.\nAmet architecto consequatur deleniti.\nQui ullam ut et dicta hic.\nVelit ratione voluptatem est perferendis facilis qui asperiores et.",
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
            }
        },
        {
            "id": 9,
            "name": "Ezra Metz",
            "tel": "982.086.6236 x3942",
            "address": "73491 Goodwin Crossroad",
            "opening_hours": "08:00",
            "description": "Voluptas hic at rem. Similique occaecati libero rerum. Voluptas aliquam aut voluptatum error nesciunt itaque eaque. Dolor quos maxime voluptatibus soluta perferendis aliquam nostrum. Explicabo qui alias facilis minima adipisci perferendis quia eligendi.",
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
            }
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
            }
        }
    ],
    "comments": [
        {
            "id": 241,
            "text": "text",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-11-02T08:37:15.000Z",
            "updatedAt": "2021-11-02T08:37:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": "迷客夏"
        },
        {
            "id": 231,
            "text": "text comment",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T12:11:21.000Z",
            "updatedAt": "2021-10-21T12:11:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 221,
            "text": "111111",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:52:47.000Z",
            "updatedAt": "2021-10-21T09:52:47.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 211,
            "text": "123",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:51:33.000Z",
            "updatedAt": "2021-10-21T09:51:33.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 201,
            "text": "123",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:39:15.000Z",
            "updatedAt": "2021-10-21T09:39:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 191,
            "text": "text",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:38:01.000Z",
            "updatedAt": "2021-10-21T09:38:01.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 181,
            "text": "text",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:28:08.000Z",
            "updatedAt": "2021-10-21T09:28:08.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 171,
            "text": "text",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:25:02.000Z",
            "updatedAt": "2021-10-21T09:25:02.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 161,
            "text": "text",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:24:45.000Z",
            "updatedAt": "2021-10-21T09:24:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 151,
            "text": "text",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2021-10-21T09:19:37.000Z",
            "updatedAt": "2021-10-21T09:19:37.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z"
            },
            "Restaurant": null
        }
    ]
}

export default {
    components: {
        NavTabs,
        NewestRestaurants,
        NewestComments
    },
    data () {
      return {
        restaurants: [],
        comments: []
      }
    },
    created () {
      this.fetchFeeds ()
    },
    methods: {
      fetchFeeds () {
        const { restaurants, comments } = dummyData
        this.restaurants = restaurants
        this.comments = comments.filter(comment => comment.Restaurant && comment.text)
      }
    }
}
</script>