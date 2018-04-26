import React from 'react';
import { hashHistory } from 'react-router';
import Camera from './Camera';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
      {
        React.cloneElement(<Camera />, {
          changeTitle: () => { /* 空 */ },
          getScreenshot: (screenshot) => {
            const screenshotId = '12345678';
            localStorage.setItem(screenshotId, screenshot);
            hashHistory.push(`/s2/${screenshotId}`);
          },
          title: '拍身份证',
          params: { coverDesc: '请放正凭证，并调整好光线' },
        })
      }
      </div>
    );
  }
}
