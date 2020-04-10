import React, { Fragment, Component } from 'react'
import CKEditors from 'react-ckeditor-component'
import Breadcrumb from '../common/breadcrumb'

class Editor1 extends Component {
  constructor(props) {
    super(props)
    this.updateContent = this.updateContent.bind(this)
    this.state = {
      content: 'content',
    }
  }

  updateContent(newContent) {
    this.setState({
      content: newContent,
    })
  }

  onChange(evt) {
    var newContent = evt.editor.getData()
    this.setState({
      content: newContent,
    })
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb parent="Editor" title="Ck Editor" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>CK Editor Example</h5>
                </div>
                <div className="card-body">
                  <CKEditors
                    activeclassName="p10"
                    content={this.state.content}
                    events={{
                      blur: this.onBlur,
                      afterPaste: this.afterPaste,
                      change: this.onChange.bind(this),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Editor1
