// @flow
//
import XXActionScaleBy from './XXActionScaleBy.js';

import XXScale from 'XXFoundation/Type/XXScale.js';

/**
 * 用来表示缩放的action
 */
class XXActionScaleTo extends XXActionScaleBy {
  /**
   * 目标位置
   * @type {XXScale}
   */
  _destinationScale: null | XXScale;

  /**
   * 构造函数
   * @param  {[type]} scale [description]
   * @param  {[type]} duration [description]
   */
  constructor(scale: XXScale, duration: number = 1000) {
    super(new XXScale(), duration);

    this._destinationScale = scale;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    if (this._destinationScale) {
      let scaleFlow = this._destinationScale;

      let deltaScaleX = scaleFlow.scaleX() - actionTarget.scale().scaleX();
      let deltaScaleY = scaleFlow.scaleY() - actionTarget.scale().scaleY();
      let deltaScaleZ = 0;

      this._scaleFactor = new XXScale(deltaScaleX, deltaScaleY, deltaScaleZ);
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionScaleTo';
  }
}

export default XXActionScaleTo;
