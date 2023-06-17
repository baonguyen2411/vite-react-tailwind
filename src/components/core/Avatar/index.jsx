import { memo } from 'react';
import { PropTypes } from 'prop-types';

const Avatar = ({ src, ...restProps }) => {
  let className = 'w-12 rounded-full shadow-lg';
  if (restProps.className) {
    className = `${className} ${restProps.className}`;
  }

  return <img src={src} className={className} alt="Avatar" />;
};

Avatar.propTypes = {
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: 'https://tecdn.b-cdn.net/img/new/avatars/2.webp',
};

export default memo(Avatar);
