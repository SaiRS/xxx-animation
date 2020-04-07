/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-11-07 10:15:55
 * @Last Modified by: xjiaxiang86@gmail.com
 * @Last Modified time: 2019-11-07 10:23:25
 */

/**
 * 调度项的接口类型
 * 调度项被Schedule管理和调度
 * @export
 * @interface ScheduleItem
 */
export interface IScheduleItem {
  /**
   * 提供给Schedule用来更新Item的操作
   * @memberof ScheduleItem
   */
  update(): void;
  /**
   * 提供给Schedule用来调整Item的优先级的操作
   * @param {number} priority
   * @memberof ScheduleItem
   */
  adjustPrioprity(priority: number): void;
}

/**
 * 调度器
 * 我们使用Schedule来调度ActionManager, 触发其update方法
 * @export
 * @class Schedule
 */
export class Schedule {}
