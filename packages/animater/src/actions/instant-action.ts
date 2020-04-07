import XXActionInterval from './XXActionInterval.js';

const xxvEPSILON = 0.0001;
/**
 * 用来表示瞬间动作
 */
class XXActionInstant extends XXActionInterval {
  /**
   * 构造函数
   */
  constructor() {
    let duration = xxvEPSILON;
    super(duration);
  }

  /**
   * @inheritdoc
   */
  step(deltaTime: number) {
    // 保证update调用时是update(1)
    super.step(2 * xxvEPSILON);
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionInstant';
  }
}

export default XXActionInstant;
