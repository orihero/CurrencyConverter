import {makeAutoObservable} from 'mobx';
import {ItemType} from './type';
import requests from '../../api/request';

export class CurrencyStore {
  activeFromCurrency: ItemType = {} as ItemType;
  activeToCurrency: ItemType = {} as ItemType;
  resultCurrency: {} = {};

  constructor() {
    makeAutoObservable(this);
  }

  changeCurrency = async (from: string, to: string, amount: string) => {
    const query = `?from=${from}&to=${to}&date=2023-06-24&amount=${amount}&format=json`;
    const response = await requests.currency(query);
    this.setResultCurrency(response.data);
  };

  setFromCurrency = (dto: ItemType) => {
    this.activeFromCurrency = dto;
  };

  setToCurrency = (dto: ItemType) => {
    this.activeToCurrency = dto;
  };

  clearStore = () => {
    this.activeFromCurrency = {} as ItemType;
  };

  private setResultCurrency = (dto: any) => {
    this.resultCurrency = dto;
  };
}
