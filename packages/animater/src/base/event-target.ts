/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-29 20:38:20
 * @Last Modified by: xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-30 20:47:18
 */

export type IEventListener = EventListener;
export type IEventListenerObject = EventListenerObject;

/**
 * event target接口
 * 保持跟原生的EventTarget一致
 * @export
 * @interface IEventTarget
 */
export interface IEventTarget {
  addEventListener(
    type: string,
    listener: IEventListener | IEventListenerObject,
  ): void;
  removeEventListener(
    type?: string,
    listener?: IEventListener | IEventListenerObject,
  ): void;
  dispatchEventListener(event: Event): void;
}
