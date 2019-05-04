/**
 * home page action 
 * author
 * time
 */

import { ADDNUMBER } from "../constants/home";
import { AcitonType } from "../index.d";

//数字增加
const addNumber = (num: number): AcitonType => {
	return {
		type: ADDNUMBER,
		payload: num
	}
}

export {
	addNumber
}