<template>
    <div>
        <div class="table-header">
            <p>ID</p>
            <p>Имя</p>
            <p>Роль</p>
            <p>Дата создания</p>
            <p>Действия</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabHeaderUser',
}

</script>

<style scoped>
.table-header {
    display: flex;
    text-align: left;
    border-bottom: solid 1px #444141;
}
p {
   flex-basis: 20%;
    
}
</style>