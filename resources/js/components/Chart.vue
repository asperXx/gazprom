<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      chart: [],
      headers: [
        { text: "ФИО", align: "start", sortable: false, value: "last_name" },
        { text: "Отдел", value: "department" },
        { text: "Дата рождения", value: "birth_date" },
        { text: "Огоньки", value: "flames" },
      ],
      users: this.chart
    };
  },
  created() {
    axios.get("api/auth/chart").then(res => {
      console.log(res.data.users);
      this.chart = res.data.users;
    });
  }
};
</script>