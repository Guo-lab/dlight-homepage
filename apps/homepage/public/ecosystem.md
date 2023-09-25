# Ecosystem

# @dlightjs/components

This is a well-maintained components library for DLight.

# Stack

## HStack

### usage

```js
@View
class MyComp {
  Body() {
    HStack() 
    {
      div("we will")
      div("be in one line")
    }
  }
}
```

### props

| name      | type                          | default value | description                                                 |
| --------- | ----------------------------- | ------------- | ----------------------------------------------------------- |
| alignment | "top" \| "center" \| "bottom" | "top"         | how elements with different height inside HStack will align |
| spacing   | number                        | 10            | column-gap between elements                                 |
| width     | string                        | "100%"        | HStack div's width                                          |
| height    | string                        | "max-content" | HStack div's height                                         |

## VStack

### usage

```js
@View
class MyComp {
  Body() {
    VStack() 
    {
      div("we will")
      div("be vertically displayed")
    }
  }
}
```

### props

| name      | type                               | default value | description                                                |
| --------- | ---------------------------------- | ------------- | ---------------------------------------------------------- |
| alignment | "leading" \| "center" \| "tailing" | "leading"     | how elements with different width inside VStack will align |
| spacing   | number                             | 10            | row-gap between elements                                   |
| width     | string                             | "max-content" | VStack div's width                                         |
| height    | string                             | "100%"        | VStack div's height                                        |

## ZStack

### usage

```js
@View
class MyComp {
  Body() {
    ZStack() 
    {
      div("we will")
      div("be overlapped")
    }
  }
}
```

### props

| name       | type                               | default value | description                                                 |
| ---------- | ---------------------------------- | ------------- | ----------------------------------------------------------- |
| hAlignment | "leading" \| "center" \| "tailing" | "leading"     | how elements with different width inside ZStack will align  |
| vAlignment | "top" \| "center" \| "bottom"      | "top"         | how elements with different height inside HStack will align |
| width      | string                             | "max-content" | ZStack div's width                                          |
| height     | string                             | "max-content" | ZStack div's height                                         |

## Spacer

Push elements away.

### usage

```js
@View
class MyComp {
  Body() {
    HStack() 
    {
      Spacer()
      div("I will be in the center horizontally")
      Spacer()
    }
  }
}
```

## 

# Route

It's too powerful and easy to use, try it out.

```js
@View
class Page {
  // RouteParam will be passed through env. It has navigator and current path.
  @Env RouteParam = required 
  navigator = this.RouteParam.navigator
  path = this.RouteParam.path
  
  Body() {
    div(`I am page: ${this.path}`)
    button("goto home")
    	.onclick(() => {
      	this.navigator.to("../home")
    	})
    // nested router
    RouterSpace() 
    {
      Route("hello")  // -> /page/hello
      {
        div("hello")
      }
      Route("world")  // -> /page/world
      {
        div("world")
      }
    }
  }
  
}

@View
class MyComp {
  navigator?
  
  Body() {
    RouterSpace() 
    	.navigator(navigator)
    {
      Route("home")  // -> /home
      {
        div("I am home")
      } 
      Route("page")  // -> /pate
      {
        Page()
      }
      Route(/abc+/)   // -> /abcc....
      {
        div("I will match abc+++")  // regex route
      }
      Route()
      {
        div("I am others")	// default route
      }
    }
  }
}
```

# Switch

Simple implemented switch-case expression.

```js
@View
class MyComp {
  idx = 0
  
  Body() {
    Switch(idx)
    {
      Case(0) 
      {
        div("0")
      } 
      Case(1) 
      {
        div("1")
      }
      Case()
      {
        div("other")
      }
    }
  }
}
```


# Transition

## Transition

### usage

```js
@View
class MyComp {
  @State width = 50
  
  Body() {
    button("+ width")
    	.onclick(() => {
      	this.width += 50
    	})
    Transition()
    {
      div()
        ._backgroundColor("red")
        ._width(this.width)
    }
  }
}
```

### props

| name     | type   | default value | description               |
| -------- | ------ | ------------- | ------------------------- |
| duration | number | 0.5           | transition's duration (s) |
| easing   | string | "ease-in-out" | transition's easing type  |
| delay    | number | 0             | transition's delay (s)    |

## TransitionGroup

Too powerful to describe, just try these codes and you'll know how to use it(maybe).

```js
function getData(text) {
    return {
      id: Math.random().toString(20),
      text
    }
}
export @View
class TransitionTest {
    @State list = [
        getData("First one"),
        getData("II 222"),
        getData("333333 okk"),
        getData("This is four"),
        getData("555555!!"),
    ]
    remove() {
        this.list.splice(Math.floor(Math.random()*(this.list.length-1)), 1)
        this.list = [...this.list]
    }
    add() {
        this.list.splice(Math.floor(Math.random()*(this.list.length-1)), 0, getData(`---${this.list.length}`))
        this.list = [...this.list]
    }
    shuffle() {
        let newList = this.list
        while(JSON.stringify(newList) === JSON.stringify(this.list)) {
            newList = this.list
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
        }
        this.list = [...newList]
    }
    @State length = 100
    @State toggle = true

    Body() {
        button("shuffle")
            .onclick(() => {
                this.shuffle()
            })
        button("toggle")
            .onclick(() => {
                this.toggle = !this.toggle
            })
        button("remove")
            .onclick(() => {
                this.remove()
            })
        button("add")
            .onclick(() => {
                this.add()
            })
        button("+")
            .onclick(() => {
                this.length += 50
            })
        button("-")
            .onclick(() => {
                this.length -= 50
            })
        if (this.toggle){
            TransitionGroup()
                .duration(1)
                .delay({
                    firstAppear: (el) => {
                        return el.dataset.index * 0.7 ?? 0
                    }
                })
                .appearWith((el) => ({
                    opacity: 0,
                    backgroundColor: "yellow",
                    transform: `translateX(${40 + 80 * el.dataset.index ?? 0}px)`
                }))
                .disappearWith({
                    opacity: 0,
                    transform: "translateX(100px)",
                    backgroundColor: "yellow"
                })
            {
                for(let [idx, ok] of Object.entries(this.list)) { [ok.id]
                    div(ok.text)
                        .willAppear((el) => {
                            el.dataset.index = idx
                        })
                        ._width(`${this.length}px`)
                        ._marginTop("10px")
                        ._backgroundColor(this.toggle ? "blue" : "red")
                }
            }
        }
    }

}
```

# @dlightjs/easy-css

# @dlightjs/emotion

融合`@emotion/css` 后的dlightjs工具包，提供两种使用方式

# CSS

同原生`@emotion/css` 一样使用

```typescript
import {css} from "@dlightjs/emotion"

@View
class MyComp  {
    Body() {
      div("hello")
        .className(css`
          width: 100px;
          background-color: red;
        `)
    }
}
```

```typescript
import {css} from "@dlightjs/emotion"

const MyCompBoxCss = css`
  width: 100px;
  height: 100px;
`

const MyCompColorCss = css`
   background-color: yellow;
   color: red;
`

@View
class MyComp  {
    Body() {
      div("hello")
        .className(MyCompBoxCss)
        .className(MyCompColorCss)
    }
}
```

# Styled

同 react 中的 styled-component 用法一致

## HTMLNode

```typescript
import {styled} from "@dlightjs/emotion"


const MyBeautifulDiv = styled.div`
  width: 100px;
  background-color: red;
`

@View
class MyComp  {
    Body() {
      MyBeautifulDiv("hello")
    }
}
```

## CustomNode

```typescript
import {styled} from "@dlightjs/emotion"

@View
class MyComp  {
    @Prop className = required
    Body() {
      div("hello")
        .className(this.className)
    }
}

const MyBeautifulWComp = styled(MyComp)`
  width: 100px;
  background-color: red;
`

@View
class MyComp  {
    Body() {
      MyBeautifulWComp()
    }
}
```

## 传递参数

和styled-component 用法一致

```typescript
import {styled} from "@dlightjs/emotion"


const MyBeautifulWidthDiv = styled.div`
  width: ${props => props.width};
  background-color: red;
`

@View
class MyComp  {
    Body() {
      MyBeautifulWidthDiv("hello")
        .width("200px")
    }
}
```

