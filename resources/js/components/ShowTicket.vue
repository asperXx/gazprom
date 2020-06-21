<template>
    <div>
        <h2>{{ ticket.title }}</h2>
        <p v-html="ticket.body"></p>
        <p>{{ ticket.flames }}</p>
        <hr>
        <h3>Комментарии</h3>
        <v-alert text color="info">
            <div>Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur turpis.</div>
            <v-divider
        class="my-4 info"
        style="opacity: 0.22"
      ></v-divider>
      <v-row
        align="center"
        no-gutters
      >
        <v-col class="grow">Пользователь</v-col>
        </v-row>
        </v-alert>
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
            console.log(this.$route.params.id)
            axios.get('/api/auth/showProp/' + this.$route.params.id, {
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