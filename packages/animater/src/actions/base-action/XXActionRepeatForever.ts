// @flow

import XXActionRepeat from './XXActionRepeat.js';

/**
 * 表示重复的action
 */
class XXActionRepeatForever extends XXActionRepeat {
  /**
   * 构造杉树
   * @param  {XXActionInterval} action 需要重复的action
   */
  constructor(action: XXActionInterval) {
    super(action, Number.MAX_SAFE_INTEGER);
  }

  /**
   * @inheritdoc
   */
  reverse(): XXActionRepeatForever {
    return new XXActionRepeatForever(this._innerAction);
  }
}

export default XXActionRepeatForever;
