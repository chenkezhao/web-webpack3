import React from 'react';
import { Link } from 'react-router';

export default class Demo extends React.Component {
  render() {
    const screenshot = localStorage.getItem(this.props.params.screenshotId);
    return (
      <div>
        <div>从当前页面多次（2，3次）导航回退上一个页面（拍照页面），摄像头画面会卡死！</div>
        {screenshot ? <img src={screenshot} alt="" style={{ width: '70%' }} /> : null}
      </div>
    );
  }
}
