<template>
<v-card>
  <v-card-title>Рейтинг сотрудников</v-card-title>
  <v-data-table :headers="headers" :items="result" :items-per-page="5" class="elevation-1">

  <template v-slot:item.medals="{ item }">
    <v-avatar v-for="(medal,id) in item.medals" :key="id">
      <img
        :src="medal.href"
        style="width: 80%; height: 80%;"
      >
    </v-avatar>
  </template>

  </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Фамилия", align: "start", value: "last_name" },
        { text: "Имя", align: "start", value: "name" },
        { text: "Отчетсво", align: "start", value: "second_name" },
        { text: "Филиал", value: "department" },
        { text: "Отдел", value: "branch" },
        { text: "Дата рождения", value: "birth_date" },
        { text: "Огоньки", value: "flames" },
        { text: "Достижения", value: "medals" },
      ],
      users: [],
      users_branches: [],
      users_dep: [],

      result: []
    };
  },
  created() {
    axios.get("api/auth/chart").then(res => {
      // console.log(res.data.users[1].last_name);

      this.users_dep = res.data.users_dep;
      this.users_branches = res.data.users_branches;
      this.users = res.data.users;
      this.medals = res.data.medals

      var user = {
          last_name: '',
          name: '',
          second_name: '',
          department: '',
          branch: '',
          birth_date: '',
          flames: '',
          
          medals: []
      }

      for (let i = 0; i < this.users.length; i++) {

        user.last_name = this.users[i].last_name
        user.name = this.users[i].name
        user.second_name = this.users[i].second_name
        user.department = this.users_dep[i][0].department
        user.branch = this.users_branches[i][0].title
        user.birth_date = this.users[i].birth_date
        user.flames = this.users[i].flames
        user.medals = this.medals[i]

        this.result.push(user)
        user = {}
      }

      console.log(this.result)
    });
  }
};
</script>