# Test Read Markdown From Resources

### This is a dummy python code block

```python
def foo():
    return 'bar'
```

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

```scala
def linearSearch(arr: List[Int], elem: Int): Int = {
  //the functional way, common in scala would be:
  //args.indexOf(target)
  for (i <- arr.indices if (arr(i) == elem)) {
      return i
  }
  -1
} 
```


```javascript
import { createBrowserHistory } from "history"

export default createBrowserHistory()
```

```css
@import '~antd/dist/antd.css';

.App {
  text-align: center;
}

html, body, #root, #root>div {
  height: 100%
}
```