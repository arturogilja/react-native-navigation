import { useState } from 'react'

/**
 * Hook personalizado para crear reactividad en campos de texto
 * @param {String} initialValue Valor inicial para el campo
 */
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  // Props que se le van a pasar al componente TextInput
  const bind = {
    value,
    onChangeText: (text) => {
      setValue(text)
    },
  }

  //Se devuelve el valor y bind
  return [value, bind]
}

export default useInput
