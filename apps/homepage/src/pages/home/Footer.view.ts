import { Env, View, required } from "@dlightjs/dlight"
import { type Typed, Pretty, div } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import { getSize } from "../../utils/utilFunc"

@View
class Footer {
  @Env theme: any = required

  Body() {
    div()
      .className(this.footerWrapCss)
    {
      div()
        .className(this.textWrapCss)
      {
        div("Built with DLight and ❤️")
        div("by @iandx and @orange04")
      }
    }
  }

  textWrapCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${getSize(16)};
  `

  footerWrapCss = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8%;
    margin-top: ${getSize(80)};
    padding: ${getSize(30)} 0;
    border-top: solid 1px rgba(82,110,52,0.2);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(82,110,52,0.7);
    cursor: default;
  `
}

export default Footer as Pretty as Typed
