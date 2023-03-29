import {defineStore} from "pinia";
import {Const} from "../index";

export const useAuthStore = defineStore(Const.StoreId.Auth, {
	state: () => ({})
})