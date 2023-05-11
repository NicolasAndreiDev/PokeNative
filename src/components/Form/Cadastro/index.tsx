import React from 'react';
import {useState} from 'react';
import FormPadrao from '../FormPadrao';

type CadastroProps = {
  onPress: () => void;
};

export default function CadastroForm({onPress}: CadastroProps) {
  const [valuesList, setValuesList] = useState<{
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }>({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  });

  function handleChange(name: string, value: string) {
    setValuesList({...valuesList, [name]: value});
  }

  return (
    <FormPadrao
      onPress={onPress}
      onChange={handleChange}
      values={valuesList}
      inputExist={true}
      title={'Cadastrar'}
      text={'Já possui uma conta?'}
    />
  );
}
