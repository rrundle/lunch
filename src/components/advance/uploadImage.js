import React, { Component, Fragment } from 'react'
import ImageUploader from 'react-images-upload'
import Breadcrumb from '../common/breadcrumb'

class UploadImage extends Component {
  constructor(props) {
    super(props)
    this.state = { pictures: [] }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    })
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb title="Upload" parent="Gallery" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Multiple Image Upload</h5>
                </div>
                <div className="card-body">
                  <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    label=""
                    buttonText="Upload Images"
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
                    maxFileSize={1048576}
                    fileSizeError=" file size is too big"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Select Single Image Upload</h5>
                </div>
                <div className="card-body">
                  <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    label=""
                    singleImage={true}
                    buttonText="Upload Images"
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
                    maxFileSize={1048576}
                    fileSizeError=" file size is too big"
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

export default UploadImage
