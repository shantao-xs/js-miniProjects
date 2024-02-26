# drum-kit
> course url: https://courses.wesbos.com/account/access/65d35440504cc1ab95347cb8/view/194130650
  
keyword: DOM, eventListener, querySelector, addCssStyles, customAttribute

## key features
### 1. play sound
<i>listen for keyboard key press, catch the target keyboard, and play corresponding sounds</i>
1. 'listen': .addEventListener('event',function)
  - events: keydown, click, etc.
  - function: audio.play()
2. 'catch': 定位data-key属性为event对应属性的那个元素。document.querySelector(`audio[data-key="${e.keyCode}"]`)
- 模板字面量 `%{}`
- 类名选择器与属性选择器 .key[data-key=65]：.是类名选择器，[]是属性选择器，此处表示选择class=key且属性符合data-key=65的元素
3. 'corresponding': use the custom attribute 'data-key' to anchor the target \<audio> element
 - 'custom attribute': how to create a new attribute?

### 2. play animation
<i>when keyboard is pressed, play the 'playing' animation and vanish in specific numbers of seconds</i>
1. listen 'keydown'
2. 执行key.classList.add('playing')：给元素增加class=playing样式

### 3. transience effect
<i>animation finishes in very short time，取消'playing'的css class效果</i>
- 方法1：使用setTimeout(function,1000)来延迟执行
- 方法2：遍历每个class=key的元素，监听到transitionend过渡变化后，执行取消动作

