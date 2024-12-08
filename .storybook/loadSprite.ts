export const loadSprite = async () => {
  const response = await fetch('./sprite.svg')
  const sprite = await response.text()
  const div = document.createElement('div')
  div.style.display = 'none'
  div.innerHTML = sprite
  document.body.insertBefore(div, document.body.firstChild)
}
