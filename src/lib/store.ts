import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const alert = writable('This is a to-do list. Welcome to use it');

const localStore = (key: string, initial: Todo[]) => {
	const toString = (value: Todo[]) => JSON.stringify(value, null, 2);
	const toObj = JSON.parse;

	if (browser) {
		if (localStorage.getItem(key) === null) {
			localStorage.setItem(key, toString(initial));
		}

		const value = localStorage.getItem(key);
		if (value === null) {
			throw new Error('value is null');
		}
		const saved = toObj(value);
		const { subscribe, set, update } = writable(saved);
		return {
			subscribe,
			set: (value: Todo[]) => {
				localStorage.setItem(key, toString(value));
				return set(value);
			},
			update
		};
	}
};

export const todos = localStore('my-todos', [
	{ name: 'My #1 to-do: Order food for lunch', id: 1, completed: false },
	{ name: 'My #2 to-do: Car wash', id: 2, completed: true }
]);
