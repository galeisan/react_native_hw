import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useRootStore} from '../hooks/useRootStore';
import {LangType} from '../modules/lang/LangType';

export default function HomeScreen({navigation}) {
  const {langStore} = useRootStore();
  const {t} = useTranslation();

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangeLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU,
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <TouchableOpacity
        style={[styles.lang_btn]}
        onPress={() => handleChangeLang()}>
        <Text>{t('main.screens.home.button')}</Text>
      </TouchableOpacity>
      <View style={[styles.content]}>
        <Text>{t('main.screens.home.title')}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lang_btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FADDE1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
