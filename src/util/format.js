import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

export const priceFormatted = num => `R$ ${numeral(num).format('0,0.00')}`;
