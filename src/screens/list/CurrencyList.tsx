import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {BackIcon} from '../../components/icons/BackIcon';
import {SearchIcon} from '../../components/icons/SearchIcon';
import NavigationService from '../../navigate/NavigationService';
import Data from '../../store/data/currencies.json';
import RadioButton from '../../components/RadioButton';
import {observer} from 'mobx-react-lite';
import {ItemType} from '../../store/currency/type';
import useRootStore from '../../components/hooks/useRootStore';
import {useRoute} from '@react-navigation/native';

const CurrencyList = () => {
  const {currencyStore} = useRootStore();
  const [data, setData] = useState(Data);
  const [searchText, setSearchText] = useState('');
  const route = useRoute();

  const type = route?.params?.type ?? '';

  const handleNavigationBack = () => {
    NavigationService.goBack();
  };

  const handleSearch = (value: string) => {
    const filteredData = Data.filter(item => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchText(value);
    setData(filteredData);
  };

  const handleSelect = useCallback(
    (item: ItemType) => {
      if (type === 'from') {
        currencyStore.setFromCurrency(item);
      } else if (type === 'to') {
        currencyStore.setToCurrency(item);
      }

      handleNavigationBack();
    },
    [currencyStore, type],
  );

  const _renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<ItemType>) => {
      return (
        <TouchableOpacity
          onPress={() => handleSelect(item)}
          style={styles.itemStyle}
          key={index.toString()}>
          <View style={styles.itemStyleFlag}>
            <Image source={{uri: item.flagSrc}} style={styles.iconFLag} />
            <Text style={styles.itemText}>
              {item.name.length > 30
                ? item.name.slice(0, 27) + '...'
                : item.name}
            </Text>
          </View>
          <RadioButton
            selected={
              type == 'from'
                ? currencyStore.activeFromCurrency.name === item.name
                : currencyStore.activeToCurrency.name === item.name
            }
          />
        </TouchableOpacity>
      );
    },
    [
      type,
      currencyStore.activeFromCurrency.name,
      currencyStore.activeToCurrency.name,
      handleSelect,
    ],
  );

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigationBack} style={styles.icon}>
          <BackIcon width={20} />
        </TouchableOpacity>
        <Text style={styles.text}>Currency Select</Text>
      </View>
      <View style={styles.searchInput}>
        <View style={styles.searchIcon}>
          <SearchIcon height={20} width={20} />
        </View>
        <TextInput
          onChangeText={text => handleSearch(text)}
          value={searchText}
          style={styles.textInput}
        />
      </View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        contentContainerStyle={styles.contentStyle}
      />
    </View>
  );
};

export default observer(CurrencyList);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  icon: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    paddingLeft: 40,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    paddingHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 30,
    zIndex: 2,
  },
  iconFLag: {
    width: 30,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: '#DEDEDE',
    paddingVertical: 16,
  },
  itemStyleFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemText: {
    fontSize: 16,
  },
  contentStyle: {
    backgroundColor: '#DEDEDE',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
