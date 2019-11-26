# js原型以及原型链
js中的原型和原型链可以类比为其他语言的类和类的继承

## Object.getPrototypeOf(obj)
此方法可以获取对象的原型
- obj: 对象

## 以对象字面量的形式创建的普通对象的原型链
```js
const basePerson = {
  eat: function () {
    console.log(this.food)
  }
} // 创建一个对象
Object.getPrototypeOf(basePerson) === Object.prototype // true
basePerson => Object.prototype => null // 原型链
```
## Object.create(proto, propertiesObject)
此方法可创建一个指定原型的对象
- proto: 对象的原型
- propertiesObject: 对象的属性

::: warning propertiesObject
此参数添加的属性需要添加属性描述符,否则属性不可枚举不可修改
:::

```js
const person = Object.create(basePerson)
person.food = '苹果' // 建议这样添加属性不使用propertiesObject来添加属性
person.eat()  // 苹果
Object.getPrototypeOf(person) // basePerson
Object.getPrototypeOf(Object.getPrototypeOf(person))  // Object.prototype
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(person))) // null
person => basePerson => Object.prototype => null // 原型链
```
