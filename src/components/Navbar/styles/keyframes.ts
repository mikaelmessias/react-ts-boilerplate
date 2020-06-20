import { keyframes } from 'styled-components';

const nav = {
  show: keyframes`
    from {
      top: -260px;
    }
    to: {
      top: 52px;
    }
  `,

  hide: keyframes`
    from {
      top: 50px;
    }
    to: {
      top: -260px;
    }
  `,
};

export default { nav };
