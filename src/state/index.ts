import {createPinia} from "pinia";

export namespace Const {
	export namespace StoreId {
		export const App = 'app'
		export const Auth = 'auth'
	}
}

export const state = createPinia()