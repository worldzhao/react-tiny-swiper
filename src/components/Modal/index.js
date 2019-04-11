import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onMaskCloseable: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
  };

  static defaultProps = {
    onMaskCloseable: false,
    onCancel: () => {},
    onOk: () => {},
  };

  constructor(props) {
    super(props);
    this.isFirstShowed = false;
  }

  componentDidMount = () => {
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  };

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  handleWrapperClick = (e) => {
    e.stopPropagation();
  };

  handleMaskClick = () => {
    const { onMaskCloseable } = this.props;
    onMaskCloseable && this.props.onCancel();
  };

  renderModalWrapper = () => {
    const { visible } = this.props;
    /* 倘若模态框从未被打开 模态框内容为null */
    if (!visible && !this.isFirstShowed) return null;
    /* 模态框被打开过一次 则模块框内容只会被显示或隐藏 而不会被销毁 */
    this.isFirstShowed = true;
    return (
      <div className="credit-modal--wrapper" onClick={this.handleWrapperClick}>
        {this.props.children}
      </div>
    );
  };

  render() {
    const { visible } = this.props;
    const maskCls = cx({
      'credit-modal--mask': true,
      hide: !visible,
    });

    return createPortal(
      <div
        className={maskCls}
        onClick={this.handleMaskClick}
        style={{
          height: `${document.body.scrollHeight}px`,
        }}
      >
        {this.renderModalWrapper()}
      </div>, // 塞进传送门的JSX
      this.node // 传送门的另一端DOM node
    );
  }
}

export default Modal;
