// @flow

import XXActionInterval from '../XXActionInterval.js';
import XXPosition from 'XXFoundation/Type/XXPosition.js';
import xxvLog from 'XXTool/LogTool.js';

/**
 * 位置移动动画
 * 相对当前位置移动的偏移量
 */
class XXActionMoveBy extends XXActionInterval {
  /**
   * 坐标偏移量
   * @type {XXPosition}
   */
  _offsetPosition: XXPosition;

  /**
   * 起始坐标
   * @type {XXPosition}
   */
  _startPosition: XXPosition;

  /**
   * [constructor description]
   * @param {XXPosition} offsetPosition 坐标偏移量
   * @param {number} duration 动画时长
   */
  constructor(offsetPosition: XXPosition, duration: number = 1000) {
    super(duration);

    this._offsetPosition = offsetPosition;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXNodeActor) {
    super.startWithTarget(actionTarget);

    if (actionTarget) {
      this._startPosition = actionTarget.position();
    }
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    // 更新target位置
    // let deltaX = this._offsetPosition.posX() * (process);
    // let deltaY = this._offsetPosition.posY() * (process);
    // let deltaZ = this._offsetPosition.posZ() * (process);

    if (this._startPosition && this._target) {
      let posFlow = this._startPosition;
      let targetFlow = this._target;

      let beginX = posFlow.posX();
      let beginY = posFlow.posY();
      let beginZ = posFlow.posZ();

      let changeX = this._offsetPosition.posX();
      let changeY = this._offsetPosition.posY();
      let changeZ = this._offsetPosition.posZ();

      // 应用time function
      let x = this._timeFunction.easeFunction(process, beginX, changeX, 1);
      let y = this._timeFunction.easeFunction(process, beginY, changeY, 1);
      let z = this._timeFunction.easeFunction(process, beginZ, changeZ, 1);
      // let x = posFlow.posX() + deltaX;
      // let y = posFlow.posY() + deltaY;
      // let z = posFlow.posZ() + deltaZ;

      // 不更新模型树
      targetFlow.moveTo(new XXPosition(x, y, z), false);
    } else {
      xxvLog.warn('[moveBy] update with invalid parameter');
    }
  }

  /**
   * @inheritdoc
   */
  reverse(): XXAction {
    let action = new XXActionMoveBy(
      this._offsetPosition.multiply(-1),
      this._duration,
    );

    this._copyDecoratorTo(action);

    return action;
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionMoveBy';
  }
}

export default XXActionMoveBy;
