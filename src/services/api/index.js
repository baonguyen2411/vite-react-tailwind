import axios from 'axios';

import config from '@/config';

const api = axios.create({ baseURL: config.BASE_URL || window.location.origin, 'Content-Type': 'application/json' });

export default api;
