<template>
    <div class="nav">
        <button class="nav-btn" type="button"><router-link to="/">Home</router-link></button>
        <button class="nav_btn" type="button"><router-link to="/login">Auth</router-link></button>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    border: 1px solid black;
    background-color: gray;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    display: flex;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
.nav button{
    width: 80px;
    height: 30px;
}

</style>