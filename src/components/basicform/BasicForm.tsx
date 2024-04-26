import { useFormik } from 'formik'
import schema from './schema'

const BasicForm = () => {
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            age: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            alert("АААААА, ЖЕНЩИНА")
        }   
    })


    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor='username'>Username</label>
            <input
                value={values.username}
                onChange={handleChange}
                id='username'
                type='text'
                placeholder='Enter your username'
            />
            <br/>
            <label htmlFor='age'>Age</label>
            <input
                value={values.age}
                onChange={handleChange}
                id='age'
                type='number'
                placeholder='Enter your age'
            />
            <br/>
            <label htmlFor='password'>Password</label>
            <input
                value={values.password}
                onChange={handleChange}
                id='password'
                type='password'
                placeholder='Enter your password'
            />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default BasicForm