import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(5)
})

export default schema