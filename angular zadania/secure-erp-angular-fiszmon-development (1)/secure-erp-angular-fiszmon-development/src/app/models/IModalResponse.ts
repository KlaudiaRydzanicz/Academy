import {ISale} from './ISale';
import {ModalCloseStates} from '../sales/enums/ModalCloseStates';

export interface IModalResponse {
  state: ModalCloseStates;
  data?: ISale;
}
