// @flow
//
import XXActionInterval from './XXActionInterval.js';
import XXAction from './action.js';

/**
 * 调整action执行速度的action
 * @type {[type]}
 */
class XXActionSpeed extends XXAction {
  _speed: number;
  _innerAction: XXActionInterval;

  /**
   * 构造函数
   * @param  {XXAction} action [description]
   * @param  {number} speed    倍数
   */
  constructor(action: XXActionInterval, speed: number = 1) {
    super();

    this._speed = Math.max(0.1, speed);
    this._innerAction = action;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actor: XXActor) {
    super.startWithTarget(actor);
    this._innerAction.startWithTarget(actor);
  }

  /**
   * @inheritdoc
   */
  resetActionState() {
    super.resetActionState();
    this._innerAction.resetActionState();
  }

  /**
   * @inheritdoc
   */
  step(deltaTime: number) {
    this._innerAction.step(this._speed * deltaTime);
  }

  /**
   * @inheritdoc
   */
  isDone() {
    return this._innerAction.isDone();
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionSpeed';
  }

  /**
   * @inheritdoc
   */
  reverse(): XXActionSpeed {
    return new XXActionSpeed(this._innerAction.reverse(), this._speed);
  }
}

export default XXActionSpeed;
