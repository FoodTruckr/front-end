import useForm from './../utils/useForm'
import { TextField, Button } from 'react95'

const initialValues = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const [{ username, password }, handleChange] = useForm(initialValues)

  return (
    <div style={{ width: '100%', marginTop: '10%' }}>
      <div style={{ textAlign: 'center', marginBottom: '2%', width: '100%' }}>
        <Button type={{ textAlign: 'center' }} active>
          Sign in Below!
        </Button>
      </div>
      <div style={{ width: '200px', margin: '0 auto' }}>
        <div style={{ display: 'flex' }}>
          <TextField
            value={username}
            placeholder="Username"
            onChange={handleChange}
            name="username"
            type="text"
            fullWidth
          />
        </div>
        <TextField
          placeholder="Password"
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
        />
        <Button
          style={{ marginLeft: '32%', marginTop: '5%' }}
          type="submit"
          primary
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
