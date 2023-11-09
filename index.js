const openaihelper = require('openai');

const openai = new openaihelper.OpenAI();
(async () => {
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo-1106",
		response_format: {
			"type": "json_object"
		},
		messages: [
			{"role": "system", "content": "You are a helpful assistant that gives students practice questions about the Software Development Process. Whenever you receive the prompt 'New Question', you will return a multiple choice question in a valid JSON format, along with 4 possible answers (a, b, c and d) and a 'correct_answer' field that contains which of the possible answers is correct."},
			{"role": "user", "content": "New Question"}
		],
	})
	
	console.log(response.choices[0].message.content);

})();
