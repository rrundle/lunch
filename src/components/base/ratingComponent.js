import React, { Fragment, useState } from 'react'
import Breadcrumb from '../common/breadcrumb'
import Ratings from 'react-ratings-declarative'

const RatingComponent = () => {
  const [rating, setRating] = useState()

  // const handleClick = (event) => {
  //     setValue({ value: undefined });
  // }

  const changeRating = (newRating) => {
    setRating(newRating)
  }
  return (
    <Fragment>
      <Breadcrumb parent="Base" title="Rating" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5> Rating</h5>
              </div>
              <div className="card-body">
                <div className="rating-container digits rating-primary">
                  <Ratings
                    rating={rating}
                    widgetRatedColors="blue"
                    changeRating={changeRating}
                  >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget widgetHoverColor="black" />
                    <Ratings.Widget />
                  </Ratings>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Reset Rating</h5>
              </div>
              <div className="card-body">
                <div className="rating-container">
                  <Ratings
                    rating={rating}
                    widgetRatedColors="blue"
                    changeRating={changeRating}
                  >
                    <Ratings.Widget
                      widgetDimension="60px"
                      svgIconViewBox="0 0 5 5"
                      svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
                    />
                    <Ratings.Widget
                      widgetDimension="60px"
                      svgIconViewBox="0 0 5 5"
                      svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
                    />
                    <Ratings.Widget
                      widgetDimension="60px"
                      svgIconViewBox="0 0 5 5"
                      svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
                    />
                    <Ratings.Widget
                      widgetDimension="60px"
                      svgIconViewBox="0 0 5 5"
                      svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
                      widgetHoverColor="black"
                    />
                    <Ratings.Widget
                      widgetDimension="60px"
                      svgIconViewBox="0 0 5 5"
                      svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
                    />
                  </Ratings>
                  {/* <button onClick={handleClick}>Reset</button> */}
                </div>
              </div>
            </div>
          </div>
          {/*<div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Readonly Rating</h5>
                            </div>
                            <div className="card-body">
                                <div className="rating-container">
                                    <Rating
                                        initialRating={3}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Readonly Fractional Rating</h5>
                            </div>
                            <div className="card-body">
                                <div className="rating-container">
                                    <Rating
                                        initialRating={2.5}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>React Span Element Rating</h5>
                            </div>
                            <div className="card-body">
                                <div className="rating-container">
                                    <Rating
                                        emptySymbol={<span className="icon-text">-</span>}
                                        fullSymbol={[1, 2, 3, 4, 5].map(n => <span className="icon-text">{n}</span>)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Fontawesome Start Rating</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container digits">
                                    <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Fractional rating</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                emptySymbol="fa fa-star-o fa-2x"
                                                fullSymbol="fa fa-star fa-2x"
                                                fractions={2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Bootstrap Five Heart rating</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                emptySymbol="fa fa-heart-o fa-2x"
                                                fullSymbol="fa fa-heart fa-2x"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Alert when rate changes</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                onChange={(rate) => alert(rate)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Colored rating</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                stop={6}
                                                emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                                                    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                                    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                                                fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                                    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                                    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Mixed symbols</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']}
                                                fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Custom each symbol</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                stop={4}
                                                emptySymbol="fa fa-battery-empty fa-2x"
                                                fullSymbol={['fa fa-battery-1 fa-2x', 'fa fa-battery-2 fa-2x',
                                                    'fa fa-battery-3 fa-2x', 'fa fa-battery-4 fa-2x']}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>1 To 10 Rating</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                stop={10}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Rating with placeholder</h5>
                            </div>
                            <div className="card-body height-equal">
                                <div className="rating-container">
                                    <div className="star-ratings">
                                        <div className="stars stars-example-fontawesome-o">
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={'fa fa-star-o fa-2x' }
                                                placeholderSymbol={'fa fa-star-half-empty fa-2x'}
                                                fullSymbol={'fa fa-star fa-2x'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
        </div>
      </div>
    </Fragment>
  )
}

export default RatingComponent
