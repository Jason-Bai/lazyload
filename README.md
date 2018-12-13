# lazyload

懒加载的实现中，需要两个关键词值，一个是当前可视区域的高度，另一个是元素距离可视区域顶部的高度；

## 当前可视区域的高度

当前可视区域的高度，在现代浏览器及IE9以上的浏览器中，可以用window.innerHeight属性获取。在低版本IE的标准模式中，可以用document.documentElement.clientHeight获取，这里我们兼容两种情况：

```
const viewHeight = window.innerHeight || document.documentElement.clientHeight;
```

## 元素距离可视区域顶部的高度

元素距离可视区域顶部的高度，我们这里选用 getBoundingClientRect() 方法来获取返回元素的大小及其相对于视口的位置。对此 MDN 给出了非常清晰的解释：

```
该方法的返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的 CSS 边框集合 。
```

```
DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right 和 bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
```

## 显示判断

当元素距离可视区域顶部的高度小于等于当前可视区域的高度，就需要把当前img的data-src添加到img的src上即可。
