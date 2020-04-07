/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-30 20:32:12
 * @Last Modified by:   xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-30 20:32:12
 */

export enum ECompareResult {
  GreetThan = 'gt',
  LessThan = 'lt',
  Equal = 'eq',
}

export interface IComparable<T> {
  compare(another: T): ECompareResult;
}
