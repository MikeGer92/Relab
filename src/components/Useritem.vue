<template>
    <div class="useritem">
        <div class="user_id">{{ id }}</div>
        <div class="user_name">{{ name }}</div>
        <div class="user_role">{{ role }}</div>
        <div class="user_ctime">{{ ctime }}</div>
    </div>
</template>

<script>

import {actionTypes} from '@/store/modules/useritem'
export default {
    name: 'Useritem',
    props: {
        userUrl: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log('init useritem')
        this.$store.dispatch(actionTypes.getUseritem, {userUrl: this.userUrl})
    },
    data() {
        return {
            id: 1,
            name: 'Mike',
            role: 'admin',
            ctime: '02-11-2021 8:56'
        }
    }

}

</script>
