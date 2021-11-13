<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3"
        v-for="user in users"
        :key="user.id"
      >
        <router-link :to="{ name: 'user', parmas: { id: user.id }}">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'

const dummyData = {
    "users": [
        {
            "id": 41,
            "name": "sss",
            "email": "sss@www.v",
            "password": "$2a$10$n.P5rlX7tHdxbMvoe/Dr.uTRV.tNcYXScKUUOcGd5DmnoDD8JPI4e",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-04T02:57:13.000Z",
            "updatedAt": "2021-11-04T02:57:13.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-27T05:23:52.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 41,
                        "createdAt": "2021-11-11T10:51:15.000Z",
                        "updatedAt": "2021-11-11T10:51:15.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
        },
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-27T05:23:52.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
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
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$RDuM0nSTb8e5OJergUBAeOecTeGBe.Sr8xWreYzsJsONzZzOvwkDq",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 11,
            "name": "hello",
            "email": "hello@world.com",
            "password": "$2a$10$NkNjEPVzlLY9FoAqXWHX4.VUZ4baBILjQeZNHxRwCjGf.S7x53Jk6",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-24T12:05:35.000Z",
            "updatedAt": "2021-10-24T12:05:35.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 21,
            "name": "123123",
            "email": "lllxz@outlook.com",
            "password": "$2a$10$tpRNfK/rKPZLM514hUUjKOznSa48cKzF5KlAdEINlRQtAEzXHFOZC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-02T12:20:39.000Z",
            "updatedAt": "2021-11-02T12:20:39.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 31,
            "name": "Aaaa",
            "email": "aaa@aaa.com",
            "password": "$2a$10$TTBWrEWYfkYw3PXfAyJPy.MwScb7qXwfwvnBk4ZmxkNMWGiaqJaM6",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-02T17:45:46.000Z",
            "updatedAt": "2021-11-02T17:45:46.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
    name: 'UsersTop',
    components: {
        NavTabs
    },
    data () {
      return {
        users: []
      }
    },
    created () {
      this.fetchTopUsers()
    },
    methods: {
      fetchTopUsers () {
        this.users = dummyData.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      },
      addFollow (userId) {
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            }
          }
        })
      },
      deleteFollow (userId) {
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            }
          }
        })
      }
    }
}
</script>