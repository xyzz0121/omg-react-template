/**
 * home page action 
 * zhouyang20
 * 2019.03.29
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