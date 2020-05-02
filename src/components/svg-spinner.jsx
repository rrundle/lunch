import React, { useEffect } from 'react'

const animationLength = 2000

const SvgSpinner = ({ show }) => {
  useEffect(() => {
    // This triggers the spinner animation
    const loopSvg = () => {
      const path = document.querySelector('.lunch-logo-bottom')
      const length = path.getTotalLength()
      setInterval(() => {
        drawSvg(path, length)
        setTimeout(() => {
          undrawSvg(path, length)
        }, animationLength / 2)
      }, animationLength)
    }
    show && loopSvg()
  }, [show])

  const drawSvg = (path, length) => {
    path.style.transition = path.style.WebkitTransition = 'none'
    path.style.strokeDasharray = `${length} ${length}`
    path.style.strokeDashoffset = 0
    path.style.strokeWidth = '5'
    path.getBoundingClientRect()
    path.style.transition = path.style.WebkitTransition = `stroke-dashoffset ${
      animationLength / 2
    }ms ease-in-out`
    path.style.strokeDashoffset = length
  }

  // offests the stoke back to it's starting position
  const undrawSvg = (path, length) => {
    path.style.strokeDashoffset = length
    path.style.strokeDashoffset = '0'
  }

  return show ? (
    <div className="spinner-wrapper">
      <svg
        height="100px"
        width="100px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <g>
          <path
            className="lunch-logo-top"
            fill="none"
            d="M31.423,20.466c-1.35-2.024-4.274-2.873-6.496-1.885l-1.896,0.843c-2.222,0.988-3.464-0.109-2.76-2.438   l2.979-9.829c0.706-2.329,3.224-3.792,5.596-3.253l37.672,8.573c2.372,0.539,3.41,2.755,2.306,4.923l-3.47,6.809   c-1.104,2.168-3.417,2.534-5.137,0.814l-1.228-1.228c-1.721-1.72-4.785-2.024-6.809-0.674l-0.124,0.082   c-2.024,1.35-4.99,0.957-6.592-0.873c-1.6-1.829-4.608-2.286-6.683-1.015l-1.052,0.645c-2.074,1.271-4.876,0.654-6.227-1.37   L31.423,20.466z"
            stroke="#BE915B"
            strokeWidth="5"
          ></path>
          <path
            className="lunch-logo-bottom"
            fill="none"
            d="M82.446,60.198c-0.154-2.429-1.13-6.217-2.168-8.418l-2.332-4.949c-1.038-2.201-2.246-5.959-2.687-8.353   l-2.056-11.223c-0.44-2.393-0.99-2.37-1.225,0.052l-1.486,15.399c-0.233,2.422-0.458,4.52-0.498,4.663   c-0.04,0.144-0.932,2.056-1.981,4.252l-0.492,1.025c-1.05,2.195-1.88,5.981-1.842,8.414l0.296,19.449   c0.038,2.432,1.45,2.988,3.138,1.235c0,0,1.188-1.231,4.738-1.264c1.776-0.004,3.683,0.62,5.589,1.97   c0.7,0.494,0.866,1.465,0.37,2.163c-0.494,0.699-1.465,0.865-2.162,0.371c-1.509-1.06-1.509-1.06-1.509-1.06   c-1.258-0.188-3.962,0.736-6.006,2.056c0,0-2.446,1.576-3.562,3.86c-0.378,0.732-0.378,0.732-0.378,0.732   c-0.1,0.246-0.544,0.886-0.99,1.422c0,0,0,0-0.624,0c-0.096,0-0.192-0.01-0.288-0.025c-0.728-0.133-0.728-0.133-0.728-0.133   c-0.299-0.754-0.572-3.359-0.608-5.794l-0.384-25.3c-0.036-2.432-0.055-4.532-0.042-4.664c0.014-0.132,0.985-2.25,2.036-4.444   l0.525-1.104c1.051-2.194,2.103-5.972,2.337-8.394l1.554-16.072c0.234-2.422-0.402-2.593-1.414-0.381l-1.826,3.987   c-1.012,2.212-3.248,2.614-4.969,0.894l-2.616-2.616c-1.72-1.72-4.784-2.024-6.808-0.674l-0.126,0.083   c-2.024,1.35-4.99,0.957-6.59-0.873S40,24.161,37.896,25.382l-0.944,0.549c-2.104,1.221-4.948,0.661-6.32-1.245   c-1.372-1.906-2.898-1.517-3.39,0.866l-1.61,7.788c-0.492,2.383-2.206,5.831-3.808,7.662l-1.418,1.62   c-1.602,1.831-3.002,5.318-3.11,7.749l-1.158,25.761c-0.108,2.429,1.676,5.089,3.968,5.906l38.242,13.659   c2.292,0.818,5.965,0.636,8.163-0.408l13.633-6.464c2.198-1.044,3.87-3.885,3.716-6.312L82.446,60.198z"
            stroke="#BE915B"
            strokeWidth="5"
          ></path>
        </g>
      </svg>
      <div className="spinner-text">Packing lunches...</div>
    </div>
  ) : null
}

export default SvgSpinner
