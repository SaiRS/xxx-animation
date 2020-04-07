// @flow

import XXActionRotateBy from './XXActionRotateBy.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';

/**
 * 旋转到某个角度的action
 */
class XXActionRotationTo extends XXActionRotateBy {
  _destinationRotation: null | XXRotation;

  /**
   * [constructor description]
   * @param  {[type]} rotation [description]
   * @param  {[type]} duration [description]
   */
  constructor(rotation: XXRotation, duration: number = 1000) {
    super(new XXRotation(0), duration);

    this._destinationRotation = rotation;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    if (this._destinationRotation && actionTarget) {
      let destinationRotationFlow = this._destinationRotation;

      let rotation: number =
        destinationRotationFlow.getRotateAngle() -
        actionTarget.rotation().getRotateAngle();
      this._offsetRotation = new XXRotation(rotation);
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionRotateTo';
  }
}

export default XXActionRotationTo;
