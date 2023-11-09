import { IOptions } from "./types"

class NumberToBDT {
  convertNumberToBDT(number: number = 0, options: IOptions = { }) {
    const taka = new Intl.NumberFormat('en-IN', { currency: 'BDT', minimumFractionDigits: options?.nDecimalPoints ?? 0, maximumFractionDigits: options?.nDecimalPoints ?? 0 })

    if (typeof number === 'number') {
      return taka?.format(number)
    }

    if (!number) {
      return number
    }
    
    if (isNaN(Number(number))) {
      return number
    }
    
    return taka?.format(number)
  }
}

export default NumberToBDT
export { NumberToBDT }
