/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-29 20:46:32
 * @Last Modified by: xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-29 20:46:56
 */

export interface IChildNode {
  remove(): void;
  before(): void;
  after(): void;
  replaceWith(): void;
}
