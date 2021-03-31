const shareBtn = document.querySelector('.share-btn')

shareBtn.addEventListener('click', () => {
  const personContainer = document.querySelector('.person')
  const shareContainer = document.querySelector('.shareContainer')
  
  personContainer.classList.toggle('active')
  shareContainer.classList.toggle('hidden')
})
