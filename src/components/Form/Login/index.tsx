import React from 'react';
import {useState} from 'react';
import FormPadrao from '../FormPadrao';

type LoginProps = {
  onPress: () => void;
  onBack: () => void;
};

export default function LoginForm({onPress, onBack}: LoginProps) {
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
      valuesText={{email: 'Digite seu email', password: 'Digite sua senha'}}
      onBack={onBack}
      onPress={onPress}
      onChange={handleChange}
      values={valuesList}
      title={'Logar'}
      text={'Não possui uma conta?'}
    />
  );
}
