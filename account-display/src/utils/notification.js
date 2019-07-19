import { notification } from 'antd';

const ERROR = {
  message: 'Error Occurred',
  description: 'Unable to retrieve data, please contact Admin.',
  duration: 0
};
const SUCCESS = {
  message: 'SUCCESSFULLY DELETED!',
  description: 'Redirecting to Acount page now...',
  duration: 1.5
};
const openNotification = args => {
  notification.open(args);
};

export { ERROR, SUCCESS, openNotification };
