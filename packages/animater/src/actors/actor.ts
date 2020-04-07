/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-31 09:56:41
 * @Last Modified by: xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-31 10:13:07
 */

import { IAnimationObject, generateUUID, IParentNode, IChildNode } from '@base';

/**
 * 执行动画的对象
 * 主要做两件事情
 * 1. 定义执行动画的方法runAction
 * 2. 声明IParentNode, IChildNode接口, 使得可以表示层级结构，
 *    具体的显示需要交由跟平台有关的子类去完成
 *
 * @class
 */
export class Actor implements IAnimationObject, IParentNode, IChildNode {
  /**
   * 唯一的标识符
   * @implements IAnimationObject
   * @type {string} id
   * @memberof XXActor
   */
  public uuid: string;

  /**
   *
   * @implements IAnimationObject
   * @type {string} 显示的名字
   * @memberof XXActor
   */
  public displayName: string;

  _children: Array<Actor>;
  _parent: Actor | null;

  /**
   * 构造函数
   * @param  {String} uuid 唯一标识符
   */
  constructor(uuid: string = generateUUID()) {
    this.uuid = uuid;
    this.displayName = `actor`;

    // 初始化
    this._children = [];
    this._parent = null;
  }

  /**
   * 执行动作
   * @param  {XXAction} actionObject 动画对象
   * @param {boolean} startDefault = true 是否默认执行
   * @return {XXActor} 返回当前actor，用于链式执行
   */
  runAction(actionObject: XXAction, startDefault: boolean = true): void {
    if (actionObject && xxvTypeVerify.isType(actionObject, XXAction)) {
      actionObject.startWithTarget(this);
      xxvActionManager.addAction(actionObject, startDefault);

      return this;
    } else {
      throw new Error('runAction with an non-action object');
    }
  }

  /******************* IParentNode **********************/

  /******************* IChildNode **********************/
}
