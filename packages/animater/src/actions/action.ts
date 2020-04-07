/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-31 08:04:52
 * @Last Modified by: xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-31 10:10:00
 */

import { XXActor } from '@actors';
import {
  IEventTarget,
  IEventListener,
  IEventListenerObject,
  generateUUID,
} from '@base';

/**
 * 动作的基类，主要完成四件事情
 * 1. 跟target建立联系
 * 2. 实现IEventTarget接口，用来发送事件
 * 3. 定义动画的基本操作，如start, pause, continue等
 * 4, 定义动画更新的接口, step和update, 用于提供给AnimationManager使用
 */
export class XXAction implements IEventTarget {
  readonly uuid: string;
  /**
   * 执行动作的对象
   * @private
   * @type {XXActor}
   */
  _target: XXActor | null;

  /**
   * 动画的基类
   * @param  {[string]} uuid [唯一标识符]
   */
  constructor(uuid?: string) {
    this.uuid = uuid || generateUUID();
    this._target = null;
  }

  /**
   * 设置执行动作的对象，一般来说表明准备开始执行动作了,初始化动画开始的状态
   * 子类一般需要重写这个方法
   * @example
   *
   * @public
   * 不要直接调用action的这个方法，而是使用XXActor的runAction方法
   * @param  {[type]} actionTarget [description]
   * @returns {void}
   */
  startWithTarget(actionTarget: XXActor): void {
    this._target = actionTarget;
  }

  /**
   * 在驱动器的每次循环中都会调用一次，用来驱动动作的执行
   * @abstract
   * @param  {[float]} [process] 表示动画进行的进度，0表示尚未开始，1表示已经完成
   * @returns {void}
   */
  update(process: number): void {
    throw new Error('Implement the function [update] of your Action class');
  }

  /**
   * 在驱动器的每次循环中都会调用一次，用来驱动动作的执行
   * @abstract
   * @param  {[float]} [deltaTime] 这次调用距离上次调用过去的时间，单位ms
   * @returns {void}
   */
  step(deltaTime: number) {
    throw new Error('Implement the function [step] of your Action class');
  }

  /**
   * 动作是否完成
   * @abstract
   * @return {Boolean} [true表明动作已经完成]
   */
  isDone(): boolean {
    // 子类继承
    return true;
  }

  /** **********************
   *  action control
   * ***********************/

  /**
   * 重置action的状态
   * @abstract
   * @returns {void}
   */
  resetActionState(): void {}

  /**
   * 开始执行，如果之前是暂停的，则继续执行
   * @returns {void}
   */
  start(): void {
    xxvActionManager.startAction(this);
  }

  /**
   * 暂停action
   */
  pause() {
    xxvActionManager.pauseAction(this);
  }

  /**
   * 重新执行action
   */
  restart() {
    xxvActionManager.restartAction(this);
  }

  /**
   * 获得跟当前相反的一个动作
   * @abstract
   * @return {[type]} [description]
   */
  reverse(): XXAction {
    throw new Error('Implement the function [reverse] of your Action class');
  }

  /**
   * 返回当前的actor
   * @return {XXActor} 执行当前动作的actor对象
   */
  getTarget(): XXActor | null {
    return this._target;
  }

  /**
   * @inheritdoc
   */
  toString() {
    return `[className = ${this.className()}]`;
  }

  /**
   * 获得className
   * @return {string} 类名
   */
  className(): string {
    return 'XXAction';
  }

  /******************** IEventTarget ******************/

  /**
   * 添加监听者
   * @memberof XXAction
   * @param {string} [type] 事件的类型, 如animationFinished
   * @param { IEventListener | IEventListenerObject} [listener] 事件的处理函数
   * @implements {IEventTarget}
   * @returns {void} void
   */
  addEventListener(
    type: string,
    listener: IEventListener | IEventListenerObject,
  ): void {
    //
  }

  /**
   * 移除监听者
   * @param {?string} [type] 事件类型, 为空时清空所有的监听者
   * @param {?(IEventListener | IEventListenerObject)} [listener] 事件的处理函数，不传时取消type对应的所有的处理函数
   * @memberof XXAction
   * @implements {IEventTarget}
   * @returns {void}
   */
  removeEventListener(
    type?: string,
    listener?: IEventListener | IEventListenerObject,
  ): void {
    //
  }

  /**
   * 发送一次事件
   * @param {Event} event 事件
   * @returns {void}
   * @implements {IEventTarget}
   * @memberof XXAction
   */
  dispatchEventListener(event: Event): void {
    //
  }

  /******************** IEventTarget ******************/
}
