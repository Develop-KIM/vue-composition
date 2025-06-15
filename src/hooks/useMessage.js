import { ref } from "vue";

function useMessage() {
	const message = ref('hello');

	function changeMessage() {
		message.value = 'world';
	}

	return { message, changeMessage };
}

export { useMessage };
