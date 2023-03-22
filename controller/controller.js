const
    models = require('../models')

const Controller = {

    response(res, json){

        console.log("Response : ",json)
        return res.json(json)
    },
    getPublicMath(math){
        if(!math || typeof math !== 'object'){
            return
        }

        return Controller.filter(math, [
            'mid_con',
            'small_con',
            'title',
            'is_ex',
            'is_ex_pic',
            'ex_math_count',
            'ex',
            'ex_pic_name',
            'basic_num',
            'twin_num',
            'aset_num',
            'bset_num',
            'cset_num',
            'math_count',
            'answer1_math_cnt',
            'answer2_math_cnt',
            'answer3_math_cnt',
            'answer4_math_cnt',
            'answer5_math_cnt',
            'math_question',
            'math_answer',
            'aset_level',
            'bset_level',
            'cset_level',
            'answer_type',
            'answer_correct_0',
            'answer_correct_1',
            'desc_math',
            'desc_math_cnt',
            'is_ex_pic_desc',
            'desc_pic_name'
        ])
    },
    filter(source, fields) {
        if (!fields || !Array.isArray(fields)) {
            return
        }

        let result = {}

        fields.forEach(field => {
            if (source[field] !== undefined) {
                result[field] = source[field]
            }
        })

        return result
    }
}

module.exports = Controller