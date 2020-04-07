/*
 * @Author: xjiaxiang86@gmail.com
 * @Date: 2019-10-30 20:33:42
 * @Last Modified by:   xjiaxiang86@gmail.com
 * @Last Modified time: 2019-10-30 20:33:42
 */

/**
 * 序列化的接口
 * @export
 * @interface ISerializable
 */
export interface ISerializable {
  read(): void;
  write(): void;
}
