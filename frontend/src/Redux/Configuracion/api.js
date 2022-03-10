import axios from 'axios';
import {server} from '../../Entorno';

export default axios.create({
  baseURL: server,
});
