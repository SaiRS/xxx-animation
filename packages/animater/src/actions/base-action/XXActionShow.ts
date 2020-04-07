// @flow

import XXActionInstant from '../instant-action.js';
import XXActionHide from './XXActionHide.js';

/**
 * 表示显示的动画
 */
class XXActionShow extends XXActionInstant {
  /**
   * @inheritdoc
   */
  update(process: number) {
    let target = this.getTarget();
    if (target) {
      target.show();
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionShow';
  }

  /**
   * @inheritdoc
   */
  reverse(): XXActionHide {
    return new XXActionHide();
  }
}

export default XXActionShow;
