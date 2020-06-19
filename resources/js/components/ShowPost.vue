<template>
    <div>
        <p>Post</p>
        <p>{{ post }}</p>
        <p>{{ likes }}</p>
        <p>{{ countLikes }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {},
                likes: {},
                countLikes: 0,
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
                this.likes = res.data.likes
                this.countLikes = this.likes.length
            })
        }
    }
</script>