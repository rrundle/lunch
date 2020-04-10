import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class imageCropper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: null,
      crop: {
        unit: '%',
        width: 50,
        height: 50,
        aspect: 16 / 9,
      },
    }
  }

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  // If you setState the crop in here you should return false.
  onImageLoaded = (image) => {
    this.imageRef = image
  }

  onVideoLoaded = (video) => {
    this.videoRef = video
  }

  onCropComplete = (crop) => {
    this.makeClientCrop(crop)
  }

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    this.setState({ crop })
  }

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg',
      )
      this.setState({ croppedImageUrl })
    } else if (this.videoRef && crop.width && crop.height) {
      const croppedVideoUrl = await this.getCroppedVid(
        this.videoRef,
        crop,
        'mp4',
      )
      this.setState({ croppedVideoUrl })
    }
  }

  getCroppedVid(video, crop, fileName) {
    const canvas = document.createElement('canvas')
    const scaleX = video.naturalWidth / video.width
    const scaleY = video.naturalHeight / video.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      video,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    )

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          return
        }
        blob.name = fileName
        window.URL.revokeObjectURL(this.fileUrl)
        this.fileUrl = window.URL.createObjectURL(blob)
        resolve(this.fileUrl)
      }, 'video/mp4')
    })
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    )

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          return
        }
        blob.name = fileName
        window.URL.revokeObjectURL(this.fileUrl)
        this.fileUrl = window.URL.createObjectURL(blob)
        resolve(this.fileUrl)
      }, 'image/jpeg')
    })
  }

  render() {
    const { crop, croppedImageUrl, croppedVideoUrl, src } = this.state

    return (
      <Fragment>
        <Breadcrumb title="Image Cropper" parent="Advance" />

        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h5>Image Cropper</h5>
            </div>
            <div className="card-body">
              <div className="input-cropper">
                <input type="file" onChange={this.onSelectFile} />
              </div>
              {src && (
                <ReactCrop
                  src={src}
                  crop={crop}
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                />
              )}
              {croppedImageUrl && (
                <img
                  alt="Crop"
                  style={{ maxWidth: '100%' }}
                  src={croppedImageUrl}
                  className="crop-portion"
                />
              )}

              {croppedVideoUrl && (
                <video controls width="250">
                  <source src={croppedVideoUrl} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default imageCropper
