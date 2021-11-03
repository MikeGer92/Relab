<template>
    <div>
        <div class="table-header">
            <p>Дата</p>
            <p>Событие</p>

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
   flex-basis: 50%;
    
}
</style>