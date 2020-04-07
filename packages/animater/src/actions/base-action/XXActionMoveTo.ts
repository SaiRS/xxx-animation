// @flow
//
import XXActionMoveBy from './XXActionMoveBy.js';
import XXPosition from 'XXFoundation/Type/XXPosition.js';

/**
 * 表示移动位置的动画
 * 移动到一个绝对位置
 */
class XXActionMoveTo extends XXActionMoveBy {
  /**
   * 目标位置
   * @type {XXPosition}
   */
  _destinationPos: null | XXPosition;

  /**
   * 构造函数
   * @param  {[type]} position [description]
   * @param  {[type]} duration [description]
   */
  constructor(position: XXPosition, duration: number = 1000) {
    super(new XXPosition(), duration);

    this._destinationPos = position;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXNodeActor) {
    super.startWithTarget(actionTarget);

    if (this._destinationPos) {
      // 计算偏移量
      let posFlow = this._destinationPos;

      let deltaX = posFlow.posX() - actionTarget.position().posX();
      let deltaY = posFlow.posY() - actionTarget.position().posY();
      let deltaZ = 0;

      this._offsetPosition = new XXPosition(deltaX, deltaY, deltaZ);
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionMoveTo';
  }
}

export default XXActionMoveTo;
