import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import RepositoryStats from './RepositoryStats'
import StyledText from './StyleText'

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>
        {props.fullname}
      </StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start' //Without this, all block will be primary color
  }
})

export default RepositoryItem
