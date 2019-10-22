sasas
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
::: tip 标题
This is a tip
:::
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
``` html {4}
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
<<< @/docs/article/js/index.js {highlightLines}{1}

![An image](./images/15022.jpg)

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
`{{ This will be displayed as-is }}`
:::

### test<OtherComponent/>
