<template>
    <div>
        <!-- <div v-if="error">Something bad</div> -->
        <div v-if="useritem">
            <div class="useritem" v-for="(item, index) in useritem.items" :key="index">
                <div class="user-meta">
                    <div class="user_id">{{ item.id }}</div>
                    <div class="user_name">{{ item.name }}</div>
                    <div class="user_role">{{ item.role }}</div>
                    <CurDate>{{ ctimes[index] }}</CurDate>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/useritem'
import CurDate from '@/components/CurDate'
export default {
    name: 'Useritem',
    components: {
        CurDate
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
    },
    methods: {

    },
    mounted() {
        console.log('init useritem')
        this.$store.dispatch(actionTypes.getUseritem, {userUrl: this.userUrl})

    },
}

</script>
