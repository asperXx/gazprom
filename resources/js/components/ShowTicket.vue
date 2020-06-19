<template>
    <div>
        <p>Ticket</p>
        <p>{{ ticket }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ticket: {}
            }
        },

        created() {
            console.log("Created")
            console.log(this.$route.params.title)
            axios.get('/api/auth/showProp/' + this.$route.params.title, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)
                this.ticket = res.data.ticket[0]
            })
        }
    }
</script>