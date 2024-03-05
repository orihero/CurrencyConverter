import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
// stores
import {CurrencyStore} from './currency/CurrencyStore';

export class RootStore {
  currencyStore: CurrencyStore;

  constructor() {
    makeAutoObservable(this);
    this.currencyStore = new CurrencyStore();
  }
}

export const rootStore = new RootStore();

export default createContext(rootStore);
