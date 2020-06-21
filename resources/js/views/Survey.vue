<template>
<div>
  <v-card>
    <survey :survey="survey"></survey>
    <div id="surveyResult"></div>
  </v-card>
</div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";

import { init as customWidget } from "../components/customwidget";

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
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "radiogroup",
              name: "question1",
              title:
                "Оцените, насколько Вы удовлетворенны основными факторами трудовой жизни?",
              choices: [
                {
                  value: "item1",
                  text: "Удовлетворен"
                },
                {
                  value: "item2",
                  text: "Скорее удовлетворен"
                },
                {
                  value: "item3",
                  text: "Скорее неудовлетворен"
                },
                {
                  value: "item4",
                  text: "Неудовлетворен"
                }
              ]
            }
          ]
        }
      ],
      "navigateToUrl": '/#/questioning',
      "showCompletedPage": false,
    };

    var model = new SurveyVue.Model(json);
    model.completeText = "Завершить";

    model.onComplete.add(function(result) {
      console.log(result.data);
      axios
        .post("/api/auth/poll", {'result': result.data, 'user_id': JSON.parse(localStorage.getItem('user')).id}, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        })
        .then(res => {
        axios.get('api/auth/checkStat')
        .then(res => {
            console.log(res.data.results.length)

            for(let i = 0; i < res.data.results.length; i++) {
                if (res.data.results[i].result = 'item1') {
                    this.item1++;
                }
                else if (res.data.results[i].result = 'item2') {
                    this.item2++;
                }
                else if (res.data.results[i].result = 'item3') {
                    this.item3++;
                }
                else if (res.data.results[i].result = 'item4') {
                    this.item4++;
                }
            }
        })
        });
    });

    return {
      survey: model,
      
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