import { StyleSheet } from 'react-native'

//styling
import { color, textColor } from '../../constants'

const buttonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  customButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginTop: 45,
  },
})

export default buttonStyles
