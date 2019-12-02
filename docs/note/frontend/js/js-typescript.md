# typescript浅谈
 这里只是简单表达一下个人使用typescript的感受和为什么最终还是在项目中选择使用typescript，语法基础啥的建议大家移步[官网文档](https://www.tslang.cn/)，中文文档写的非常的详细和易懂。

### 个人感受
个人起初对于typescript是非常不理解的，总觉得不需要预编译运行中动态类型转换是js语言的一大特色，为什么需要typescript来进行预编译，不但使得项目构建变慢，而且也增加了格外定义类型的代码量。灵活的js不去写，硬是要去写typescript实在是太痛苦了，然而慢慢的发现中大型业务复杂度较高，并且需要长久维护的项目在typescript中确实能有很大的收益。

### 以下是个人项目中遇到的问题
1. 前端字面量形式的定义对象确实方面，但是对象的可读性很差
::: warning 以下是非typescript写法
- 天书写法
```js
export default {
  data() {
    return {
      name: '',
      age: '',
      weight: '',
      height: '',
      level: 0
      data: [],
      filterForm: ''
    };
  }
};
```
- 有面向对象的意识的常规写法
```js
export default {
  data() {
    return {
      userInfo: {
        name: '', // 用户名称
        age: '', // 用户年龄
        level: 0, // 用户等级
        weight: 0, // 用户体重
        height: 0,  // 用户升高
      },
      data: [],
      filterForm: ''
    };
  }
};
```
- 当然我们可以通过定义类或者通过一个返回值为对象的函数来规范定义我们对象的模板(类)，但是页面上对象的可读性大大降低，并且增加了项目打包后的代码量。
```js
export default {
  data() {
    return {
      userInfo: new UserInfo(),
      data: [],
      filterForm: ''
    };
  }
};
```
:::

让我们看下typescript如何解决这样的情况
首先定义创建model.ts定义一个接口
```js
export interface IUserInfo{
  name: string | ''; // 用户项目
  age: number | ''; // 用户年龄
  level: number;  // 用户等级
}
```
项目中去使用,以下只是顺藤摸瓜的写法，create-vue-app创建的js项目这样写是无法通过编译的，需要配置ts-loader等
```js
import {IUserInfo} from './model.ts' // 把接口导入进来
export default {
  data() {
    return {
      userInfo: IUserInfo = {  // 这里我们定义一个userInfo并且属性和属性的类型同IUserInfo
        name: '',
        age: '',
        level: 0,
      },
    };
  }
};
```
如果你在自动化工程项目中使用了typescript，当你在IUserInfo里面新增了属性或者改变了属性的类型，相关页面没有同步更新都会给出提示，让你去修改，当不同页面有相同的实体的时候再也不用一个个检查了，极度方便。

2. 很多数据类型不确定，为了省事没有进行细粒度的判断，导致的运行期间报错
数据类型的判断确实很枯燥，也是js作为动态语言不可避免给开发者造成的困扰之一，现在流行的库vue和react也都提供了props的数据类型判断，但是以下两种情况却是代码运行时报错的集中地
- 接口返回的值数据类型
- 函数的返回值数据类型
使用typescript后只要规范的定义数据类型不使用毫无收益的any，ts编译器就会在使用变量方法时给出相应的提示，由于不是数组不能使用数组的方法，或者不是数字类型不能使用数字的方法等，一定程度上可以约束我们当数据类型不确定时增加类型判断，避免一些由于数据类型不确定造成的潜在代码运行出错的情况。

::: tip 最后说一句
typescript不会修改你的代码，只是在编译时，检测代码，帮助团队约束规范代码的工具。
:::
