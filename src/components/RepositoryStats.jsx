import { View } from 'react-native'
import StyledText from './StyleText'

const parseStats = (value) => {
  //If value > 1000, rounded by 100 and by 10, and add a K, for examploe: 1200 === 1,2K
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {parseStats(props.stargazersCount)}
        </StyledText>
        <StyledText align='center'>Stars:</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {parseStats(props.forksCount)}
        </StyledText>
        <StyledText align='center'>Forks:</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {props.reviewCount}
        </StyledText>
        <StyledText align='center' small>
          Review:
        </StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {props.rating}
        </StyledText>
        <StyledText align='center' small>
          Rating:
        </StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
