import XXActionInstant from '../instant-action.js';

/**
 * 直接设置rotation的action
 * @extends XXActionInstant
 */
class XXActionSetRotation extends XXActionInstant {
  /**
   * [constructor description]
   * @param  {[XXRotation]} rotation [description]
   */
  constructor(rotation) {
    super();
    this._rotation = rotation;
  }
  /**
   * @inheritdoc
   */
  update(process) {
    let target = this.getTarget();
    if (target) {
      target.rotateTo(this._rotation, false);
    }
  }

  /**
   * @inheritdoc
   */
  className() {
    return 'XXActionSetRotation';
  }

  /**
   * @inheritdoc
   */
  reverse() {
    throw new Error('XXActionSetRotation 没有reverse方法');
  }
}

export default XXActionSetRotation;
