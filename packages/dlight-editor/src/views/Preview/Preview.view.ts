import { View } from "@dlightjs/dlight"
import { div, button, Env, Prop, required, RequiredProp, SubView, Typed } from "@dlightjs/types"
import ResultView from "./Result.view"
import OutputView from "./Output.view"
import { HStack } from "@dlightjs/components"
import { RefreshFilled } from "@dlightjs/material-icons"
import { css } from "@dlightjs/easy-css"
import { Color, headerHeight } from "../../utils/const"

class Preview extends View {
  /** @prop */
  @Prop mountId: RequiredProp<string> = required
  @Prop currTransformedCode: RequiredProp<string> = required
  @Prop refreshFunc: RequiredProp<() => void> = required
  @Prop width: RequiredProp<string> = required
  @Env theme: Color = required
  @Env height: string = required

  /** @reactive */
  tab: "result" | "output" = "result"

  /** @lifecycle */

  /** @view */
  @SubView
  Head({ _$content }: any): any {
    button(_$content)
      .className(this.headerCss)
      .style({
        borderBottom: _$content === this.tab ? `3px solid ${this.theme.text}` : ""
      })
      .onclick(() => {
        this.tab = _$content
      })
  }

  @SubView
  Header() {
    div()
      .className(this.headerBGCss)
    {
      HStack()
        .spacing(0)
        .alignment("center")
      {
        RefreshFilled()
          .onclick(this.refreshFunc)
          .className(this.refreshIconCss)
          .color(this.theme.primary)
        this.Head("result")
        this.Head("output")
      }
    }
  }

  Body() {
    div()
      .id("dlight-playground-preview")
      .className(this.wrapperCss)
      .style({
        width: this.width
      })
    {
      this.Header()
      div()
        .style({
          display: this.tab === "result" ? "block" : "none"
        })
      {
        ResultView()
          .mountId(this.mountId)
      }
      div()
        .style({
          display: this.tab === "output" ? "block" : "none"
        })
      {
        OutputView()
          .code(this.currTransformedCode)
      }
    }
  }

  /** @style */
  wrapperCss = css`
    flex-grow: 1;
    height: ${this.height};
  `

  headerBGCss = css`
    background-color: ${this.theme.background};
    height: ${headerHeight}px;
    overflow: hidden;
  `

  headerCss = css`
    padding: 2px 0px 5px 0px;
    border-width: 0;
    background-color: ${this.theme.background};
    color: ${this.theme.text};
    font-size: 17px;
    height: ${headerHeight}px;
    cursor: pointer;
    width: calc(50% - 16px);
  `

  refreshIconCss = css`
    padding: 5px 5px 0 5px;
    cursor: pointer;
  `
}

export default Preview as any as Typed<Preview>
