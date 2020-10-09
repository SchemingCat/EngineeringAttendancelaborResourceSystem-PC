<template>
    <div>
       <p style="color: red">1111</p>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.name != 'index') {
                let token = sessionStorage.getItem('token');
                if (token == null) {
                    next('/index')
                } else if (token != null) {
                    next()
                } else {
                    next(false)
                }
            } else {
                next()
            }
        },
    }
</script>
<style scoped>
    html{
        background: white !important
    }
</style>