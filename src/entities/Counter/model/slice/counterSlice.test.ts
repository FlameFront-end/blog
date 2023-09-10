import { CounterSchema } from 'entities/Counter'

import { counterActions, counterReducers } from './counterSlice'

describe('counterSlice', () => {
	test('counter decrement', () => {
		const state: CounterSchema = { value: 10 }
		expect(counterReducers(state, counterActions.decrement)).toEqual({
			value: 9
		})
	})

	test('counter increment', () => {
		const state: CounterSchema = { value: 10 }
		expect(counterReducers(state, counterActions.increment)).toEqual({
			value: 11
		})
	})

	test('should work with empty state', () => {
		expect(counterReducers(undefined, counterActions.increment)).toEqual({
			value: 1
		})
	})
})
