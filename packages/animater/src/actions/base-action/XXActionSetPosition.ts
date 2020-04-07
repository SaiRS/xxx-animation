import XXActionInstant from '../instant-action.js';

/**
 * 直接设置位置的action
 * @extends XXActionInstant
 */
class XXActionSetPosition extends XXActionInstant {
  /**
   * [constructor description]
   * @param  {[XXPosition]} position [description]
   */
  constructor(position) {
    super();
    this._position = position;
  }
  /**
   * @inheritdoc
   */
  update(process) {
    let target = this.getTarget();
    if (target) {
      target.moveTo(this._position, false);
    }
  }

  /**
   * @inheritdoc
   */
  className() {
    return 'XXActionSetPosition';
  }

  /**
   * @inheritdoc
   */
  reverse() {
    throw new Error('XXActionSetPosition 没有reverse方法');
  }
}

export default XXActionSetPosition;
