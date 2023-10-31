import React, {useCallback, useRef} from 'react';
import styles from './styles';
import {Button} from '../../components';
import {useTranslation} from 'react-i18next';
import {View, Text, TextInput, Image} from 'react-native';
import NavigationService from '../../navigators/NavigationService';
import api from '../../api';
import {useDispatch} from 'react-redux';
import {main} from '../../store/slices';
import {get} from 'lodash';
import ErrorModal from '../../components/Modals/ErrorModal';
import axios from 'axios';

const Login = () => {
  const {setMe, setToken} = main.actions;

  const errorRef = useRef();
  const getErrorRef = useCallback(ref => {
    errorRef.current = ref;
  }, []);

  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const loginProfile = () => {
    NavigationService.reset('home');

    // setIsLoading(true);
    // api
    //   .post('https://api.bis-pro.com/api/login', {
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
          <View style={styles.topLogoCard}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.img}
            />
          </View>
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
        <Button
          isLoading={isLoading}
          style={{marginTop: 10}}
          onPress={loginProfile}>
          {t('Вход')}
        </Button>
      </View>
      <ErrorModal getRef={getErrorRef} />
    </View>
  );
};

export default Login;
