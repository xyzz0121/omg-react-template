/**
 * home page reducer
 * zhouyang20
 * 2019.03.29
 */
import { AcitonType } from "../index.d";
import { ADDNUMBER } from "../constants/home";

let defaultState = {
	num: 0
}

export function homeReducer(state = defaultState, action: AcitonType) {
	const { type, payload } = action;
	switch (type) {
		//数字增加（字段校验也在这里）
		case ADDNUMBER:
			return {
				...state,
				num: payload
			}
			break;
		default:
			return { ...state }
	}
}