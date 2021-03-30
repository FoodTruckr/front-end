import useForm from './../utils/useForm';
import { Fieldset, Radio, TextField, Window, WindowContent } from 'react95';

const initialValues = {
  username: '',
  password: '',
  role: '',
  email: '',
};

const SignUpForm = () => {
  const [{ username, email, role, password }, handleChange] = useForm(
    initialValues
  );

  return (
    <div style={{ width: '200px' }}>
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
        placeholder="E-mail"
        onChange={handleChange}
        name="email"
        type="text"
        value={email}
      />
      <TextField
        placeholder="Password"
        onChange={handleChange}
        name="password"
        type="password"
        value={password}
      />
      <Window>
        <WindowContent>
          <Fieldset label="Role">
            <Radio
              checked={role === 'user'}
              onChange={handleChange}
              value="user"
              label="🍔 User"
              name="role"
            />
            <br />
            <Radio
              checked={role === 'operator'}
              onChange={handleChange}
              value="operator"
              label="👷🏽‍♂️ Operator"
              name="role"
            />
          </Fieldset>
        </WindowContent>
      </Window>
    </div>
  );
};

export default SignUpForm;
