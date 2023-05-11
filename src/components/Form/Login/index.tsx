import React from 'react';
import {useState} from 'react';
import FormPadrao from '../FormPadrao';

type LoginProps = {
  onPress: () => void;
};

export default function LoginForm({onPress}: LoginProps) {
  const [valuesList, setValuesList] = useState<{
    email: string;
    password: string;
    username: undefined;
    confirmPassword: undefined;
  }>({
    email: '',
    password: '',
    confirmPassword: undefined,
    username: undefined,
  });

  function handleChange(name: string, value: string) {
    setValuesList({...valuesList, [name]: value});
  }

  return (
    <FormPadrao
      onPress={onPress}
      onChange={handleChange}
      values={valuesList}
      title={'Logar'}
      text={'Não possui uma conta?'}
    />
  );
}
