import axios from 'axios';

import CONFIG from '@/config';

const api = axios.create({ baseURL: CONFIG.BASE_URL || window.location.origin });

export default api;
