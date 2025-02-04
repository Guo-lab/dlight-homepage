import { Env, Prop, Static, View, required } from "@dlightjs/dlight"
import { css } from "@iandx/easy-css"
import { Pretty, Typed, div } from "@dlightjs/types"
import * as monaco from "monaco-editor"
import { Color, headerHeight } from "../../utils/const"

interface OutputProps {
  code: string
}

@View
class Output implements OutputProps {
  /** @prop */
  @Prop code = required
  @Env theme: Color = required
  @Env height: string = required

  /** @reactive */
  onCodeChange = (function() {
    this.editor?.setValue(this.code)
  }.call(this))

  /** @member */
  @Static editorEl?: HTMLElement
  @Static editor?: monaco.editor.IEditor

  /** @function */
  initEditor() {
    this.editor = monaco.editor.create(this.editorEl!, {
      value: this.code,
      minimap: { enabled: false },
      readOnly: true,
      language: "typescript",
      automaticLayout: true
    })
  }

  /** @lifecycle */
  didMount() {
    this.initEditor()
  }

  /** @view */
  Body() {
    div()
      .element(this.editorEl)
      .className(this.outputCss)
  }

  outputCss = css`
    height: calc(${this.height} - ${headerHeight}px);
  `
}

export default Output as Pretty as Typed<OutputProps>
