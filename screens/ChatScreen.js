import {StyleSheet, Button, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function ChatScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('main.screens.chat')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
