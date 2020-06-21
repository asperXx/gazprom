<template>
  <div>
    <v-card class="pa-2 sliderM">
      <v-carousel dark>
        <v-carousel-item
          class="imgSlider"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <span class="sliderTitle" align="center">{{item.text}}</span>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-row>
      <v-col lg="4" md="6" cols="12"
      v-for="(event,i) in events"
          :key="i">
        <v-card class="flex-column align-space-between justify-center sobaka" min-height="400px" >
          
          <v-img class="top-0" :src="event.src" max-width="500px" max-height="200px"></v-img>
          <v-card-title>{{event.title}}</v-card-title>
          <v-card-text>{{event.text}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:"https://www.firestock.ru/wp-content/uploads/2015/08/Dollarphotoclub_79864456-700x466.jpg",
          text:"Газпромбанк проверил темпы строительных работ мостового перехода через реку Обь в Новосибирске"
        },
        {
          src: "https://assets.iwgplc.com/image/upload/Regus/Website/homepage-product-office-space.jpg",
          text:"Спецпредложение «Летний ставкобум» от Газпромбанка: кредит наличными от 50 тысяч рублей под 7,2 % годовых"
        },
        {
          src:"https://static.tildacdn.com/tild3334-3461-4765-a263-363639623363/office.jpg",
          text:"Газпромбанк опубликовал результаты деятельности за 1 квартал 2020 года в соответствии с Международными стандартами финансовой отчетности (МСФО), показав чистую прибыль в размере 18,4 млрд. руб."
        }
      ],
      events: [
        {
          title: "Sustainability. To be or not to be - Устоять или вырасти",
          text: '25 июня 2020 года пройдет Технопарк "Сколково" проведет онлайн-встречу «Sustainability. To be or not to be - Устоять или вырасти», которая будет посвящена достижению целей устойчивого развития в эпоху пандемии и выходу компаний из карантина.',
          date: "25.06.2020",
          src:"https://s0.rbk.ru/v6_top_pics/media/img/5/81/755817089384815.jpeg"
        },
        {
          title: "Российский Энергетический Саммит 2020",
          text: "3-4 июня в Москве пройдет III Российский энергетический саммит «Энергоснабжение и цифровизация» - специализированная площадка для ключевых игроков энергетической отрасли. Саммит был перенесен из-за пандемии коронавируса.",
          date: "09.09.2020 - 10.09.2020",
          src:"https://www.gazprom-neft.ru/upload/iblock/687/SHI_8110(1).jpg"
        },
        {
          title: "ПЛАС-Форум Online & Offline Retail",
          text: "Международный ПЛАС-Форум ‘Online & Offline Retail’, организуемый журналами ПЛАС и Retail&Loyalty, - ключевое мероприятие для ритейла в России, странах ближнего и дальнего зарубежья.Формат проведения ПЛАС-Форума: выставка, конференция, круглые столы.",
          date: "07.10.2020 - 08.10.2020",
          src: "https://s0.rbk.ru/v6_top_pics/media/img/5/81/755817089384815.jpeg"
        },
        {
          title: "Системы искусственного интеллекта 2020 (новая дата)",
          text: "Разработка решений на базе искусственного интеллекта (ИИ) входит в число ключевых приоритетов крупнейших ИТ-разработчиков. Эта технология также становится неотъемлемой частью корпоративных стратегий и её применяют все большее количество компаний. Интеллектуальные решения способствуют повышению эффективности работы сотрудников, снижению затрат и росту производительности ключевых бизнес-процессов. Сложно назвать отрасль, в которой не нашлось бы применения подобным разработкам. ",
          date: "21.10.2020",
          src: "https://www.gazprom-neft.ru/upload/iblock/687/SHI_8110(1).jpg"
        },
        {
          title: "Платежный бизнес 2020 (перенесен)",
          text: "Информируем Вас, что проведение 11-го Международного ПЛАС-Форума «Платежный бизнес 2020» переносится на 18-19 ноября в связи с общей ситуацией, сложившейся в результате коронавирусой пандемии.",
          date: "18.11.2020 - 19.11.2020",
          src: "https://s0.rbk.ru/v6_top_pics/media/img/5/81/755817089384815.jpeg"
        },
        {
          title: "Банковское самообслуживание, ритейл и НДО 2020",
          text:  "ПЛАС-Форум -это экспертная площадка индустрии платежных и финансовых услуг.Форум посвящен современному состоянию и перспективам развития наличного денежного обращения (НДО), банкинга и платежной индустрии в России, в государствах – членах ЕАЭС и других странах мира.",
          date: "18.11.2020 - 19.11.2020",
          src: "https://www.gazprom-neft.ru/upload/iblock/687/SHI_8110(1).jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.imgSlider {
  opacity: 0.8;
}
.sobaka {
        position: relative;
        overflow: hidden;
    }
.sliderTitle {
  position: absolute;
  bottom: 50px;
  font-size: 25px;
  font-weight: 56;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
@media only screen and (max-width: 1920px) {
  .sliderM {
    width: 1500px;
  }
}
@media (max-width: 1280px) {
  .sliderM {
    top: -35px;
    
  }
}
@media (max-width: 720px) {
  .sliderM {
    top: -35px;
    text-align: center;
  }
}
@media (max-width: 480px) {
  .sliderM {
    text-align: center;
  }
}
</style>