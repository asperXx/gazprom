<template>
<div>

	<div v-for="(question, id) in questions" :key="question.id">
		<h3>{{ question.title }}</h3>
		<p>{{ question.text }}</p>
		<input type="radio" value=1 v-model="answers[id]">
		<label>Да</label>
		<br>
		<input type="radio" value=0 v-model="answers[id]">
		<label>Нет</label>
		<hr>
	</div>

	<div>
		<button @click="getAnswer" class="btn btn-primary">Ответить</button>
	</div>

</div>
</template>

<script type="text/javascript">
export default {
	methods: {
		getAnswer() {
			console.log(JSON.stringify(this.answers))

			/*
			Обработка
			*/
		}
	},

	data () {
		return {
			answers: [],
			questions: [
				{
					id: '1',
					title:'Вопрос 1',
					text: 'gdfgdfsgdfsg',
				},
				{
					id: '2',
					title:'Вопрос 2',
					text: 'gdfgdfsgdfsg',
				},
				{
					id: '3',
					title:'Вопрос 3',
					text: 'gdfgdfsgdfsg',
				},
				{
					id: '4',
					title:'Вопрос 4',
					text: 'gdfgdfsgdfsg',
				},
			]
		}
	}
}
</script>