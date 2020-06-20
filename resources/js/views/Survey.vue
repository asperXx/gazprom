<template>
  <v-card>
    <!-- If you want to hide survey, comment the lines below -->
    <!-- <h2>SurveyJS Library - a sample survey below</h2> -->
    <survey :survey="survey"></survey>
    <div id="surveyResult"></div>
  </v-card>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";

import { init as customWidget } from "../components/customwidget";

// widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);

SurveyVue.Serializer.addProperty("question", "tag:number");

export default {
  components: {
    Survey
  },
  data() {
    var json = {
    "title": "Наша крутая форма опроса",
    "description": "Пожалуйста, отвечайте честно!",
    "logoWidth": 60,
    "logoHeight": 60,
    "questions": [
        {
            "name": "name",
            "type": "text",
            "title": "Введите свое имя:",
            "placeHolder": "Иван Иванов",
            "isRequired": true
        }, {
            "name": "birthdate",
            "type": "text",
            "inputType": "date",
            "title": "Дата рождения:",
            "isRequired": true
        }, {
            "name": "color",
            "type": "text",
            "inputType": "color",
            "title": "Любимый цвет:"
        }, {
            "name": "email",
            "type": "text",
            "inputType": "email",
            "title": "Адрес электронной почти:",
            "placeHolder": "example@example.com",
            "isRequired": true,
            "validators": [
                {
                    "type": "email"
                }
            ]
        }
    ]
}


    var model = new SurveyVue.Model(json);
    model.completeText = "Завершить"

    model.onComplete.add(function(result) {
      console.log(result.data);
    model.onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
      axios.post("/api/auth/storeSurvey", result.data, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        })
        .then(res => console.log(res))
    });

    return {
      survey: model
    };
  }
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
