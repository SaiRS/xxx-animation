// @flow

import XXActionInterval from '../XXActionInterval.js';

/**
 * 表示重复的action
 */
class XXActionRepeat extends XXActionInterval {
  _innerAction: XXActionInterval;
  _repeatTimes: number;
  _currentRepeatedTimes: number;

  /**
   * 构造杉树
   * @param  {XXActionInterval} action 需要重复的action
   * @param  {number} times = 1  重复次数
   */
  constructor(action: XXActionInterval, times: number = 1) {
    super();

    this.initWithAction(action, times);
  }

  /**
   * 初始化
   * @param  {XXActionInterval} action 需要重复的action
   * @param  {number} times=1 重复次数
   */
  initWithAction(action: XXActionInterval, times: number = 1) {
    this._innerAction = action;
    this._repeatTimes = times;

    let duration = action.getDuration() * times;
    this.initWithDuration(duration);

    this._currentRepeatedTimes = 1;
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
  startWithTarget(actionTarget: XXNodeActor) {
    super.startWithTarget(actionTarget);

    this._innerAction.startWithTarget(actionTarget);
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    // 表示需要重复的进度间隔
    let repeatGapProcess = 1 / this._repeatTimes;
    // 计算当前重复区间最大值
    let maxRepeatValue = this._currentRepeatedTimes * repeatGapProcess;

    let realProcess = 0;
    let repeated = false;
    // 长时间的后台切换到前台时，确保计算到正确的区间
    while (process > maxRepeatValue) {
      this._currentRepeatedTimes++;
      // 重新计算当前重复区间最大值
      maxRepeatValue = this._currentRepeatedTimes * repeatGapProcess;

      repeated = true;
    }

    // 计算当前重复区间的最小值
    let minRepeatValue = (this._currentRepeatedTimes - 1) * repeatGapProcess;
    realProcess = (process - minRepeatValue) / repeatGapProcess;

    this._innerAction.update(realProcess);

    if (repeated) {
      this.doRepeatedTask();
    }
  }

  /**
   * @inheritdoc
   */
  reverse(): XXActionRepeat {
    return new XXActionRepeat(this._innerAction.reverse(), this._repeatTimes);
  }
}

export default XXActionRepeat;
