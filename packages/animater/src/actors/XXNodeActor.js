// @flow

import XXActor from './XXActor.js.js';

/**
 * 需要传递dom对象的动画宿主对象
 * 不再采用呈现树和模型树的设计，可以参考origal-doc/模型树和呈现树的思考.md
 */
class XXNodeActor extends XXActor {
  /**
   * @inheritdoc
   * @param  {[string]} uuid 对象的唯一标识符
   */
  constructor(uuid: ?string = undefined, option: Object = {}) {
    super(uuid);
  }

  /** **************************
   * 获取对象状态的方法
   *****************************/

  /**
   * @override
   * 获得对象当前坐标（模型树）
   * @return {XXPosition} 当前物体的坐标
   */
  position(): XXPosition | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前的缩放信息（模型树）
   * @return {XXScale}  当前对象的缩放信息
   */
  scale(): XXScale | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前的旋转信息（模型树）
   * @return {XXRotation}  对象当前的旋转信息
   */
  rotation(): XXRotation | null {
    return null;
  }

  /** *************************
   * 修改对象状态的方法
   ****************************/

  /**
   * @inherit
   * 修改当前物体的坐标
   * @param  {XXPosition} postion 坐标信息
   * @param  {boolean} updateModeProperty 在更新呈现的同时是不是也更新模型，
   * 一般的调用设置为true，在动画过程中设置为false，在动画结束后根据动画的选项来决定是否更新模型
   */
  moveTo(postion: XXPosition, updateModeProperty: boolean = true): void {
    // inherit by subclass
  }

  /**
   * @inherit
   * 修改当前对象的缩放
   * @param  {XXScale} scale 缩放信息
   * @param  {boolean} updateModeProperty 在更新呈现的同时是不是也更新模型，
   * 一般的调用设置为true，在动画过程中设置为false，在动画结束后根据动画的选项来决定是否更
   */
  scaleTo(scale: XXScale, updateModeProperty: boolean = true): void {
    // inheirt by subclass
  }

  /**
   * @inherit
   * 修改当前对象的旋转角度
   * @param  {XXRotation} rotaion 旋转信息
   * @param  {boolean} updateModeProperty 在更新呈现的同时是不是也更新模型，
   * 一般的调用设置为true，在动画过程中设置为false，在动画结束后根据动画的选项来决定是否更
   */
  rotateTo(rotaion: XXRotation, updateModeProperty: boolean = true): void {
    // inheirt by subclass
  }

  /**
   * @inherit
   * 对象显示
   */
  show() {}

  /**
   * @inherit
   * 对象隐藏
   */
  hide() {}

  /**
   * 获得当前对象的状态
   * @override
   * @return {XXNodeActorState}  当前对象的状态
   */
  getState(): XXNodeActorState {
    return null;
  }

  /**
   * 恢复对象的状态
   * @param  {[type]} state [description]
   */
  restoreState(state: XXNodeActorState) {}
}

export default XXNodeActor;
