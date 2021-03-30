import useForm from './../utils/useForm';
import { TextField } from 'react95';

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [{ username, password }, handleChange] = useForm(initialValues);

  return (
    <div style={{ width: '200px', marginBottom: '20px' }}>
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
    </div>
  );
};

export default LoginForm;
