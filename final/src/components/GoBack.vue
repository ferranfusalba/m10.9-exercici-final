<template>
    <button class="btn btn-primary" @click="previous">Go back</button>  
</template>

<script>
export default {
    name: 'GoBack',
    methods:{
        previous(){
            this.$router.go(-1)
        }
    }
}
</script>