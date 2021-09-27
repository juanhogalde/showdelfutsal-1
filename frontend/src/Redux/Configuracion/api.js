import axios from 'axios';
import {api} from '../../api';

export default axios.create({
  baseURL: `http://${api}:8080`,
});
