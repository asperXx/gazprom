<template>
  <div class="container">
    <!-- If you want to hide survey, comment the lines below -->
    <!-- <h2>SurveyJS Library - a sample survey below</h2> -->
    <survey :survey="survey"></survey>
    <div id="surveyResult"></div>
  </div>
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
 "completedHtml": "Спасибо за то что проголосовали",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "цукфкфуцк",
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    },
    {
     "type": "html",
     "name": "question4"
    }
   ]
  }
 ]
}

    var model = new SurveyVue.Model(json);

    model.onComplete.add(function(result) {
      console.log(result.data);

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
