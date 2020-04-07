/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-29 20:44:57
 * @Last Modified by: xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-31 10:22:45
 */

export interface IParentNode {
  // 增
  appendChild(): void;
  prependChild(): void;

  // 改
  replaceChild(): void;

  // 删
  removeChild(): void;
  removeAllChildren(): void;

  // 查
  selectChild(): void;
}
