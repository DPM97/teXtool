import { popErr } from "./toast"

export const onConvert = async () => {
  const fromBox = document.getElementById('from-box')
  const fromSelect = document.getElementById('from-select')
  const toBox = document.getElementById('to-box')
  const toSelect = document.getElementById('to-select')

  const toType = toSelect.getAttribute('value')
  const fromType = fromSelect.getAttribute('value')

  let value = { result: '' };
  if (fromType === 'excel' && toType === 'texTable') {
    value = await window.backend.ExPasteToTex(fromBox.value)
  }

  if (value.result === '') {
    popErr('You must select valid conversion types!')
  } else {
    toBox.value = value.result;
  }
}