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
  html,
  body {
    width: 100%;
    height: 100%;
  }
`;

export default style;
