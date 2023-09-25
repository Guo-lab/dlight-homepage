import { DocsStructureMapType, ExmaplesCodeDataType } from "./types"
import { initMap } from "./utilFunc"
import DocsStructureMapJson from "../pages/doc/structure/documentsStructure.json"
import EcosStructureMapJson from "../pages/doc/structure/ecosystemStructure.json"

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

export const PreviewCode = `import DLight, { View, render } from "@dlightjs/dlight"
@View
class MyComp {
  toggle = true
  fruits = ["🍎", "🍊", "🥑"]
  Body() {
    h1("hello, dlight js")
    button("toggle")
      .className("toggle")
      .onclick(() => {
        this.toggle = !this.toggle
      })
    if (this.toggle) {
      "simple text"
    }
    for (const fruit of this.fruits) {
      div(fruit)
    }
  }
}
render("app", MyComp)
`

export interface Color {
  text: string
  orange1: string
  orange2: string
  orange3: string
  orange4: string
  orange5: string
  orange6: string
  orange7: string
  orange8: string
  orange9: string
  orange10: string
  orange11: string
  orange12: string
  orange13: string
  orange14: string
  green1: string
  green2: string
  green3: string
  green4: string
  green5: string
  green6: string
  green7: string
  green8: string
  green9: string
  green10: string
  green11: string
  green12: string
  green13: string
  green14: string
}

export const colors: Record<string, Color> = {
  light: {
    text: "fff",
    orange1: "#fff9f4", // primaryBgColor
    orange2: "#fef2e8",
    orange3: "#feecdd",
    orange4: "#fde5d2", // secondaryBgColor
    orange5: "#fcd8bb",
    orange6: "#fbcba5",
    orange7: "#fabe8e",
    orange8: "#daa172",
    orange9: "#bb8357",
    orange10: "#9b663b",
    orange11: "#8b572d",
    orange12: "#7c4820",
    orange13: "#6c3a12",
    orange14: "#5c2b04",
    green1: "#f8fcf4",
    green2: "#f1f9e9",
    green3: "#eaf6de",
    green4: "#e3f3d3",
    green5: "#d6eebd",
    green6: "#c8e8a7",
    green7: "#bae291",
    green8: "#9cc177",
    green9: "#7fa05d",
    green10: "#617e44",
    green11: "#526e37",
    green12: "#445d2a", // primaryTextColor
    green13: "#354d1d",
    green14: "#263c10"
  },
  dark: {
    text: "#000",
    orange1: "#5c2b04",
    orange2: "#6c3a12",
    orange3: "#7c4820",
    orange4: "#8b572d",
    orange5: "#9b663b",
    orange6: "#bb8357",
    orange7: "#daa172",
    orange8: "#fabe8e",
    orange9: "#fbcba5",
    orange10: "#fcd8bb",
    orange11: "#fde5d2",
    orange12: "#feecdd",
    orange13: "#fef2e8",
    orange14: "#fff9f4",
    green1: "#263c10",
    green2: "#354d1d",
    green3: "#445d2a",
    green4: "#526e37",
    green5: "#617e44",
    green6: "#7fa05d",
    green7: "#9cc177",
    green8: "#bae291",
    green9: "#c8e8a7",
    green10: "#d6eebd",
    green11: "#e3f3d3",
    green12: "#eaf6de",
    green13: "#f1f9e9",
    green14: "#f8fcf4"
  }
}

export const featureData = [
  {
    title: "Delightful",
    imgUrl: "/imgs/logo-leading-png.svg",
    content: "With an API designed to be intuitive and user-friendly, web development becomes effortless with Dlight, whether you're building a simple website or a complex web application."
  },
  {
    title: "Performant",
    imgUrl: "/imgs/performant.svg",
    content: "With a minuscule file size of just 4KB, Dlight is lightning-fast and ultra-lightweight, delivering optimal performance without the need for manual optimization."
  },
  {
    title: "DX-first",
    imgUrl: "/imgs/insights.svg",
    content: "Dlight uses the syntax of function calls and dot notation to make development more enjoyable, without the need to write outdated and hard-to-read XML code."
  },
  {
    title: "Intuitively Simple",
    imgUrl: "/imgs/intuitively.svg",
    content: "Dlight is born reactive and is designed to be intuitively simple, with a minimalistic API that requires no memorization of complex functions or libraries."
  }
]

export const ExamplesCodeData: ExmaplesCodeDataType[] = [
  {
    title: "Reactivity",
    description: "",
    children: [
      {
        title: "Declare State",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        modules: [
          {
            code: `import DLight, { View, render } from "@dlightjs/dlight"
import Name from "./Name.view"
@View
class MyComp {
  Body() {
    Name()
  }
}
render("app", MyComp)`,
            path: "/index.ts"
          },
          {
            code: `import DLight, { View } from "@dlightjs/dlight"
@View
class Name {
  name = "John"

  Body() {
    h1(this.name)
  }
}

export default Name`,
            path: "/Name.view.ts"
          }
        ]
      },
      {
        title: "Update State",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae.",
        modules: [
          {
            code: `import DLight, { View, render } from "@dlightjs/dlight"
import Name from "./Name.view"
@View
class MyComp {
  Body() {
    Name()
  }
}
render("app", MyComp)`,
            path: "/index.ts"
          },
          {
            code: `import DLight, { View } from "@dlightjs/dlight"

@View
class Name {
  name = "John"

  beforeInit() {
    this.name = "Jane"
  }

  Body() {
    h1(this.name)
  }
}
            
export default Name`,
            path: "/Name.view.ts"
          }
        ]
      },
      {
        title: "Computed State",
        description: "Lorem ipsum dolor sit amet, consectetur.",
        modules: [
          {
            code: `import DLight, { View, render } from "@dlightjs/dlight"
import DoubleCount from "./DoubleCount.view"
@View
class MyComp {
  Body() {
    DoubleCount()
  }
}
render("app", MyComp)`,
            path: "/index.ts"
          },
          {
            code: `import DLight, { View } from "@dlightjs/dlight"
@View
class DoubleCount {
  count = 10
  doubleCount = this.count * 2

  Body() {
    div(this.doubleCount)
  }
}

export default DoubleCount`,
            path: "/DoubleCount.view.ts"
          }
        ]
      }
    ]
  }

]

export const DocsStructureMap: DocsStructureMapType[] = initMap(DocsStructureMapJson, "docs")

export const EcosStructureMap: DocsStructureMapType[] = initMap(EcosStructureMapJson, "ecosystem")

export const HeaderData = [
  {
    btnName: "Documents",
    path: "/docs/getting-started",
    structureData: DocsStructureMap
  },
  {
    btnName: "Playground",
    path: "/playground"
  },
  {
    btnName: "Examples",
    path: "/examples",
    structureData: ExamplesCodeData
  },
  {
    btnName: "Ecosystem",
    path: "/ecosystem"
  }
]
