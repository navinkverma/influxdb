// Libraries
import React, {PureComponent} from 'react'
import {withRouter, WithRouterProps} from 'react-router'

// Components
import {IconFont, Button, ComponentColor} from '@influxdata/clockface'

// Styles
import 'src/dataExplorer/components/SaveAsButton.scss'

class SaveAsButton extends PureComponent<WithRouterProps, {}> {
  public render() {
    return (
      <>
        <Button
          icon={IconFont.Export}
          text="Save As"
          onClick={this.handleShowOverlay}
          color={ComponentColor.Primary}
          titleText="Save your query as a Dashboard Cell or a Task"
        />
      </>
    )
  }

  private handleShowOverlay = () => {
    const {
      location: {pathname},
    } = this.props

    this.props.router.push(`${pathname}/save`)
  }
}

export default withRouter<{}, {}>(SaveAsButton)
