import { Prop, View, required, Content } from "@dlightjs/dlight"
import { table, th, tr, td, type Typed, type Pretty, type ContentProp } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import { InlineRenderer } from "@dlightjs/markit"

interface TableBlockProps {
  ast: ContentProp<any>
  props: any
}
@View
class TableBlock implements TableBlockProps {
  @Prop @Content ast = required

  @Prop props = required
  headerAligns = this.props.headerAligns
  rowAligns = this.props.rowAligns

  Body() {
    table()
      .className(this.dlightMarkitTableStyle$)
    {
      tr()
        .className(this.dlightMarkitTableTrStyle$)
      {
        for (const [index, headerColumn] of this.ast[0].entries()) {
          for (const { type, content, props } of headerColumn) {
            th()
              .className(this.dlightMarkitTableThStyle$(this.headerAligns[index]))
            {
              InlineRenderer[type](content)
                .props(props)
            }
          }
        }
      }
      for (const cellRow of this.ast.slice(1)) {
        tr()
          .className(this.dlightMarkitTableTrStyle$)
        {
          for (const [index, cellColumn] of cellRow.entries()) {
            for (const { type, content, props } of cellColumn) {
              td()
                .className(this.dlightMarkitTableTdStyle$(this.rowAligns[index]))
              {
                if (type) {
                  InlineRenderer[type](content)
                    .props(props)
                }
              }
            }
          }
        }
      }
    }
  }

  dlightMarkitTableStyle$ = css`
    border-collapse: collapse;
    margin: 15px 0 25px 0;
  `

  dlightMarkitTableTrStyle$ = css``

  dlightMarkitTableThStyle$ = (align: string) => css`
    border-bottom: solid 1px #cecece;
    padding: 10px;
    text-align: ${align};
  `

  dlightMarkitTableTdStyle$ = (align: string) => css`
    border-bottom: solid 1px rgb(226 232 240);
    padding: 15px;
    text-align: ${align};
  `
}

export default TableBlock as Pretty as Typed<TableBlockProps>
