<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Фамилия", align: "start", value: "last_name" },
        { text: "Имя", align: "start", value: "name" },
        { text: "Отчетсво", align: "start", value: "second_name" },
        // { text: "Отдел", value: "department" },
        { text: "Дата рождения", value: "birth_date" },
        { text: "Огоньки", value: "flames" },
      ],
      users: []
    };
  },
  created() {
    axios.get("api/auth/chart").then(res => {
      console.log(res.data.users[0]);
      this.users = res.data.users;
    });
  }
};
</script>