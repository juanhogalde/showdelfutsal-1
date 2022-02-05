import axios from 'axios';
import {api, puerto} from '../../Entorno';

export default axios.create({
  baseURL: `http://${api}:${puerto}`,
});
