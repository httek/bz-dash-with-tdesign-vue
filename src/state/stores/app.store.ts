import {defineStore} from "pinia";
import {Const} from "../index";

export const useStore = defineStore(Const.StoreId.App, {
	state: () => ({})
})