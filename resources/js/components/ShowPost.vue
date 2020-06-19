<template>
    <div>
        <p>Post</p>
        <p>{{ post }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {}
            }
        },

        created() {
            console.log("Created")
            console.log(this.$route.params.title)
            axios.get('/api/auth/showPost/' + this.$route.params.title, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)
                this.post = res.data.post[0]
            })
        }
    }
</script>