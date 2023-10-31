import React, {useState} from 'react';
import NavigationService from '../../navigators/NavigationService';
import {View, Text, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Button} from '../../components';
import styles from './styles';

const Login = () => {
  const {t} = useTranslation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loginProfile = () => {
    NavigationService.reset('home');
    //Misol uchun

    // api
    //   .post('login', {
    //     UserName: login,
    //     Password: password,
    //     Company: 'CHINWAKIL',
    //   })
    //   .then(res => {
    //     api.defaults.headers.common['Authorization'] = `Bearer ${get(
    //       res,
    //       'data.SessionId',
    //       '',
    //     )}`;

    //     NavigationService.reset('tabs');
    //     dispatch(setMe(res.data));
    //     setIsLoading(false);
    //   })
    //   .catch(err => {
    //     console.log('err loginProfile1', err);
    //     setIsLoading(false);
    //     errorRef.current?.open(
    //       t('Login yoki parol xato, qaytadan urunib koring'),
    //     );
    //   });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View>
          <Text style={styles.topMiniTitle}>{t('Вход')}</Text>
          <Text style={styles.titleInput}>{t('Логин')}</Text>
          <TextInput
            style={styles.input}
            onChangeText={v => setLogin(v)}
            defaultValue={login}
          />

          <Text style={styles.titleInput}>{t('Пароль')}</Text>
          <TextInput
            style={styles.input}
            onChangeText={v => setPassword(v)}
            defaultValue={password}
          />
        </View>
        <Button onPress={loginProfile}>{t('Вход')}</Button>
      </View>
    </View>
  );
};

export default Login;
