import React from "react";
import QrReader from "react-qr-scanner";
class QrScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
    this.openImageDialog = this.openImageDialog.bind(this);
  }

  openImageDialog() {
    this.refs.qrReader1.openImageDialog();
  }

  handleScan(result) {
    if (result) {
      this.setState({ result });
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: "100%",
      width: "100%"
    };
    return (
      <div>
        <QrReader
          ref="qrReader1"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <input
          type="button"
          value="Submit QR Code"
          onClick={this.openImageDialog}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default QrScanner;
