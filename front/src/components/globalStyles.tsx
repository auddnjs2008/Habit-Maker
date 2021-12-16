import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const style = css`
  ${emotionReset};
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default style;
