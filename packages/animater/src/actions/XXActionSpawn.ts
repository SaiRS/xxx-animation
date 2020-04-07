// @flow
//
import XXActionInterval from './XXActionInterval.js';
import XXActionSequence from './XXActionSequence.js';
import XXActionDelay from './BaseAction/XXActionDelay.js';

/**
 * 表示同时执行的动画序列
 */
class XXActionSpawn extends XXActionInterval {
  _actions: Array<XXAction>;
  _totalActions: number;

  /**
   * 构造函数
   * @param  {Array<XXAction>} actions 一系列action
   */
  constructor(...actions: Array<XXAction>) {
    super();
    this._init();

    actions = actions || [];
    let last = actions.length - 1;
    if (last > 0) {
      // 两个以上的参数
      // 将所有的actions组合成两个
      this._totalActions = 2;
      let prevAction: XXAction = actions[0];
      for (let i = 1; i < last; i++) {
        prevAction = new XXActionSpawn(prevAction, actions[i]);
      }
      this.initWithActionoOneTwo(prevAction, actions[last]);
    } else if (last == 0) {
      // 一个参数
      this._totalActions = 1;
      this._actions.push(actions[last]);

      let duration = this._actions[0].getDuration();
      this.initWithDuration(duration);
    } else {
      this._totalActions = 0;
      this.initWithDuration(0);
    }
  }

  /**
   * 初始化
   */
  _init() {
    this._actions = [];
    this._totalActions = 0;
  }

  /**
   * [initWithActionoOneTwo description]
   * @param  {[type]} actionOne [description]
   * @param  {[type]} actionTwo [description]
   */
  initWithActionoOneTwo(
    actionOne: XXActionInterval,
    actionTwo: XXActionInterval,
  ) {
    if (actionOne.getDuration() > actionTwo.getDuration()) {
      let delayAction = new XXActionDelay(
        actionOne.getDuration() - actionTwo.getDuration(),
      );
      let wrapTwoSequence = new XXActionSequence(actionTwo, delayAction);

      this._actions.push(actionOne);
      this._actions.push(wrapTwoSequence);
    } else {
      let delayAction = new XXActionDelay(
        actionTwo.getDuration() - actionOne.getDuration(),
      );
      let wrapOneSequence = new XXActionSequence(actionOne, delayAction);

      this._actions.push(wrapOneSequence);
      this._actions.push(actionTwo);
    }

    this.initWithDuration(
      Math.max(actionOne.getDuration(), actionTwo.getDuration()),
    );
    this._totalActions = 2;
  }

  /**
   * @inheritdoc
   */
  resetActionState() {
    super.resetActionState();

    if (0 == this._totalActions) {
      // do nothing
    } else if (1 == this._totalActions) {
      let action = this._actions[0];
      action.resetActionState();
    } else {
      let action1 = this._actions[0];
      let action2 = this._actions[1];
      action1.resetActionState();
      action2.resetActionState();
    }
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    if (0 == this._totalActions) {
      // do nothing
    } else if (1 == this._totalActions) {
      this._actions[0].startWithTarget(actionTarget);
    } else {
      this._actions[0].startWithTarget(actionTarget);
      this._actions[1].startWithTarget(actionTarget);
    }
  }

  /**
   * @inheritdoc
   */
  step(deltaTime: number) {
    this._elapsed += deltaTime;

    if (1 === this._totalActions) {
      this._actions[0].step(deltaTime);
    } else if (2 == this._totalActions) {
      this._actions[0].step(deltaTime);
      this._actions[1].step(deltaTime);
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionSpawn';
  }

  /**
   * @inheritdoc
   */
  reverse(): XXAction {
    if (0 == this._totalActions) {
      return new XXActionSpawn();
    } else if (1 == this._totalActions) {
      let action = this._actions[0];
      return new XXActionSpawn(action.reverse());
    } else {
      let action1 = this._actions[0];
      let action2 = this._actions[1];
      return new XXActionSpawn(action2.reverse(), action1.reverse());
    }
  }
}

export default XXActionSpawn;
