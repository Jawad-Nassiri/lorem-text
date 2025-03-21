
const generateTExtBtn = document.querySelector('.create-button')
const inputElement = document.querySelector('input')
const contentElement = document.querySelector('.content')
const toastElement = document.querySelector('.toast')



const loremTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl ut lobortis tincidunt, dolor justo tempus nulla, vel scelerisque nisi elit vel odio. Nulla facilisi. Praesent quis diam vel leo vestibulum tincidunt. Duis cursus est vel ante eleifend, at lacinia odio ultricies. Fusce sit amet faucibus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel metus eget enim varius aliquam. Cras facilisis, magna vel ultrices consequat, tortor nulla convallis mauris, eget tincidunt eros purus vel nibh. Praesent a euismod nulla. Integer quis nisi vel nisl porttitor euismod. Nulla facilisi. Suspendisse potenti. Sed ultrices, nisi vel tincidunt ultricies, neque lorem vulputate lorem, vel convallis nunc nisl et justo.",
]

let finalText = 0


function generateText() {
  let paragraphCount = +inputElement.value;

  if(paragraphCount <= 0 || paragraphCount > 10 || paragraphCount === "") {
    contentElement.textContent = loremTexts[finalText]
  } else {
    let output = loremTexts.slice(0 , paragraphCount).join()
    contentElement.textContent = output

    //! first way (not recommended)
    // toastElement.className += " visible"

    // second way (recommended)
    toastElement.classList.add('visible')


    //! first way (not recommended)
    // setTimeout(() => {toastElement.className = toastElement.className.slice(0, 5)}, 3000)

    // second way (recommended)
    setTimeout(() => {toastElement.classList.remove('visible')}, 3000)

  }
  
}


generateTExtBtn.addEventListener('click', generateText)

