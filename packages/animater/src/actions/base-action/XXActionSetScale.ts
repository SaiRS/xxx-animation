import XXActionInstant from '../instant-action.js';

/**
 * 直接设置scale的action
 * @extends XXActionInstant
 */
class XXActionSetScale extends XXActionInstant {
  /**
   * [constructor description]
   * @param  {[XXActionSetScale]} scale [description]
   */
  constructor(scale) {
    super();
    this._scale = scale;
  }
  /**
   * @inheritdoc
   */
  update(process) {
    let target = this.getTarget();
    if (target) {
      target.scaleTo(this._scale, false);
    }
  }

  /**
   * @inheritdoc
   */
  className() {
    return 'XXActionSetScale';
  }

  /**
   * @inheritdoc
   */
  reverse() {
    throw new Error('XXActionSetScale 没有reverse方法');
  }
}

export default XXActionSetScale;
