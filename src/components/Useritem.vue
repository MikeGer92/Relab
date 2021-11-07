<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="useritem">
      <div class="useritem" v-for="(item, index) in useritem.items" :key="index">
        <div class="user-meta">
          <div class="data-str user_id">{{ item.id }}</div>
          <div class="data-str user_name">{{ item.name }}</div>
          <div class="data-str user_role">{{ item.role }}</div>
          <CurDate class="data-str" >{{ ctimes[index] }}</CurDate>
          <button class="data-str nav-btn" type="button"  @click="$delete(useritem.items, index)">Удалить</button>
        </div>
      </div>
        <Pagination :total="useritem.total" :limit="useritem.per_page" :current-page="currentPage" :url="baseUrl"></Pagination>
    </div> 
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/useritem'
import CurDate from '@/components/CurDate'
import Pagination from '@/components/Pagination'
import {limit} from '@/helpers/vars'
import { parseUrl, stringify} from 'query-string'
export default {
    name: 'Useritem',
    components: {
        CurDate,
        Pagination
    },
    props: {
        userUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.useritem.isLoading,
            useritem: state => state.useritem.data,
            errors: state => state.useritem.error,
            ctimes: state => state.useritem.ctimes
        }),
        currentPage() {
            return Number(this.$route.query.page || '1')
        },
        baseUrl() {
            return Number(this.$route.path)
        },
        offset() {
            return this.currentPage  * limit - limit
            
        }
    },
    watch: {
        currentPage() {
            console.log('currentPage changed')
            this.fetchUseritem()
        }
    },
    methods: {
        fetchUseritem() {
            const parsedUrl = parseUrl(this.userUrl)
            const stringifiedParams = stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.url
            })
            const apiWithParams = `${parsedUrl.url}?${stringifiedParams}`
            this.$store.dispatch(actionTypes.getUseritem, {userUrl: apiWithParams})
        }
    },
    mounted() {
        console.log('init useritem')
        this.fetchUseritem()

    },
}

</script>

<style scoped>
.user-meta {
    display: flex;
    
}
.useritem {
    text-align: left;
    align-items: center;
    
}
.data-str {
    flex-basis: 20%;
    border-bottom: solid 1px #444141;
}
.nav-btn {
    width: 10px;
    height: 30px;
    border-radius: 10px;
    background-color: #5CB85C;
    color: white;
    border: solid 1px #7e7e7e;

}
</style>
