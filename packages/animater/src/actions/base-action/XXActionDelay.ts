// @flow
//
import XXActionInterval from '../XXActionInterval.js';

/**
 * 表示延迟的action
 */
class XXActionDelay extends XXActionInterval {
  /**
   * 构造函数
   * @param  {number} delay 延迟的时间,单位ms
   */
  constructor(delay: number) {
    super(delay);
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionDelay';
  }
}

export default XXActionDelay;
