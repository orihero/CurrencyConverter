import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowLeftRightIcon} from '../../components/icons/ArrowLeftRightIcon';
import {ArrowDownIcon} from '../../components/icons/ArrowDownIcon';
import NavigationService from '../../navigate/NavigationService';
import {Screens} from '../../navigate/consts/screen';
import {observer} from 'mobx-react-lite';
import {ScrollView} from '../../components/ScrollView';
import {KeyboardAvoidingView} from '../../components/KeyboardAvoidingView';
import useRootStore from '../../components/hooks/useRootStore';

const {width} = Dimensions.get('screen');

const HomeScreen = () => {
  const {currencyStore} = useRootStore();
  const [amount, setAmount] = useState('1');

  const handleNavigationFrom = () => {
    NavigationService.navigate(Screens.CURRENCY_LIST, {type: 'from'});
  };

  const handleNavigationTo = () => {
    NavigationService.navigate(Screens.CURRENCY_LIST, {type: 'to'});
  };

  const handleChangeAmount = (value: string) => {
    setAmount(value);
    if (
      value &&
      currencyStore.activeFromCurrency.code &&
      currencyStore.activeToCurrency.code
    )
      currencyStore.changeCurrency(
        currencyStore.activeFromCurrency.code,
        currencyStore.activeToCurrency.code,
        value,
      );
  };

  return (
    <ScrollView
      style={styles.wrap}
      contentContainerStyle={styles.contentContainer}>
      <KeyboardAvoidingView>
        <View style={styles.content}>
          <View style={styles.topContent}>
            <View style={{gap: 10}}>
              <Text style={styles.text}>From:</Text>
              <TouchableOpacity
                style={styles.currencyBtn}
                onPress={handleNavigationFrom}>
                <Image
                  source={{
                    uri:
                      currencyStore.activeFromCurrency.flagSrc ??
                      'https://flagcdn.com/h40/us.png',
                  }}
                  style={styles.iconFLag}
                />
                <Text>{currencyStore.activeFromCurrency.code ?? 'USD'}</Text>
                <ArrowDownIcon />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
              <ArrowLeftRightIcon />
            </View>
            <View style={{gap: 10}}>
              <Text style={styles.text}>To:</Text>
              <TouchableOpacity
                onPress={handleNavigationTo}
                style={styles.currencyBtn}>
                <Image
                  source={{
                    uri:
                      currencyStore.activeToCurrency.flagSrc ??
                      'https://flagcdn.com/h40/uz.png',
                  }}
                  style={styles.iconFLag}
                />
                <Text>{currencyStore.activeToCurrency.code ?? 'UZS'}</Text>
                <ArrowDownIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text>Amount:</Text>
            <TextInput
              onChangeText={text => handleChangeAmount(text)}
              value={amount}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={styles.currencyOne}>
              {amount}
              {currencyStore.activeFromCurrency.symbolNative}
            </Text>
            <Text style={styles.currency}>
              {currencyStore.resultCurrency?.result ?? 0}{' '}
              {currencyStore.activeToCurrency.symbolNative}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    width: width,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    gap: 24,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconFLag: {
    width: 30,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
  },
  currencyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: '#DEDEDE',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
  currencyOne: {
    fontSize: 19,
  },
  currency: {
    fontSize: 42,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});
