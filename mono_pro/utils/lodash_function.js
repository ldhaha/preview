import dayjs from 'dayjs';
export const formatDate = (val, format = 'YYYY-MM-DD') => dayjs(val).format(format);
