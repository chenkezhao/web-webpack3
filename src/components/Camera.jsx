import React from 'react';
import Webcam from 'react-webcam';
import { Button, WingBlank, Toast } from 'antd-mobile';


export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceIds: null,
    };
    // Good to go!();
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const deviceIds = [];
      devices.forEach(async (device) => {
        if (device.kind === 'audioinput') {
        } else if (device.kind === 'videoinput') {
          deviceIds[deviceIds.length] = device.deviceId;
        }
      });

      this.setState({
        deviceIds,
      });
    }).catch((e) => {
      Toast.info(e, 1);
    });
  }
  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.props.getScreenshot(screenshot); // 输出截图给调用者
  }
  render() {
    console.log('...................');
    const { deviceIds } = this.state;
    return (
      <div className="container">
        <Webcam
          audioSource="1"
          videoSource={deviceIds && deviceIds[1]} // 0前置，1后置
          audio={false}
          height={document.querySelector('body').offsetHeight - 200}
          width={document.querySelector('body').offsetWidth}
          // style={{ position: 'absolute' }}
          ref={(node) => { // 获取子组件实例，React方法
            this.webcam = node
          }}
          screenshotFormat="image/jpeg"
        />
        <Button
          type="primary"
          size="large"
          onClick={this.handleClick}
        >
          拍照
        </Button>
      </div>
    );
  }
}
