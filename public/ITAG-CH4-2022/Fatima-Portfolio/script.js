var introElement = document.getElementById("intro-box")

introElement.addEventListener('mouseenter', function() {
  console.log('enter intro')
  introElement.classList.add('intro-bg')
})

introElement.addEventListener('mouseleave', function() {
  console.log('leave intro')
  introElement.classList.remove('intro-bg')
})