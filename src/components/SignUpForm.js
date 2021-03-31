import useForm from './../utils/useForm';
import { Fieldset, Radio, TextField, Window, WindowContent, Button } from 'react95';

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
    <div style={{width: '100%', marginTop: '10%',}}>
      <div style={{textAlign: 'center', marginBottom: '2%', width: '100%'}}>
      <Button type={{textAlign: 'center'}} active>Sign up Below!</Button>
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
            <Button type="submit" primary>Submit</Button>
          </Fieldset>
        </WindowContent>
      </Window>
    </div>
    </div>
  );
};

export default SignUpForm;
