export const indexCode = `import DLight, { View, render } from "@dlightjs/dlight"
import HelloView from "./hello.view"
import CounterView from "./counter.view"
import ArrayView from "./array.view"
import ToggleView from "./toggle.view"
@View
class MyComp {
  Body() {
    HelloView()
    CounterView()
    ArrayView()
    ToggleView()
  }
}
render("app", MyComp)
`

export const HelloView = `import DLight, { View } from "@dlightjs/dlight"
@View
class HelloView {
  Body() {
    h1("hello, dlight js")
  }
}
export default HelloView
`

export const CounterView = `import DLight, { View } from "@dlightjs/dlight"
import WrapperView from "./wrapper.view"
@View
class CountView {
  count = 1
  Body() {
    WrapperView()
      .color("gray")
    {
      div(this.count)
      button("+")
        .onclick(() => {
          this.count ++
        })
      button("-")
        .onclick(() => {
          this.count --
        })
    }
  }
}
export default CountView
`

export const ArrayView = `import DLight, { View } from "@dlightjs/dlight"
import WrapperView from "./wrapper.view"
@View
class ArrayView {
  apples = ["apple0", "apple1", "apple2"]
  Body() {
    WrapperView()
      .color("blue")
    {
      button("add apple")
        .onclick(() => {
          this.apples.push(\`apple\${this.apples.length}\`)
          this.apples = [...this.apples]
        })
      button("remove apple")
        .onclick(() => {
          this.apples = [...this.apples.slice(0, -1)]
        })
      for (let apple of this.apples) {
        div(apple)
      }
    }
  }
}
export default ArrayView
`

export const ToggleView = `import DLight, { View } from "@dlightjs/dlight"
import WrapperView from "./wrapper.view"
@View
class ToggleView {
  toggle = true
  Body() {
    WrapperView()
      .color(this.toggle ? "green" : "red")
    {
      button("toggle")
        .onclick(() => {
          this.toggle = !this.toggle
        })
      if (this.toggle) {
        div("now toggle is true")
          ._color("green")
      } else {
        div("xxxxx")
          ._color("red")
      }
    }
  }
}
export default ToggleView
`

export const WrapperView = `import DLight, { View, required } from "@dlightjs/dlight"
@View
class WrapperView {
  @Prop color = required
  @Children children = required
  Body() {
    div()
      ._border(\`1px solid \${this.color}\`)
      ._padding("10px")
      ._margin("10px")
    {
      _(this.children)
    }
  }
}
export default WrapperView
`

export const codeTemplate = (tabName: string) => `import DLight, { View } from "@dlightjs/dlight"
@View
class ${tabName[0].toUpperCase() + tabName.slice(1)}View {
  Body() {
    "I am ${tabName} view"
  }
}
export default ${tabName[0].toUpperCase() + tabName.slice(1)}View
`
