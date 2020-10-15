export const numberFormat = {
  computed: {
   $numberSeparator: () => {
      return num => {
        return Number(num).toLocaleString('en-US')
      }
    }
  }
}