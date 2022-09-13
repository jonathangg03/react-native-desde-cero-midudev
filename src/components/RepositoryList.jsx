import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import repositories from '../data/repositories'

const RepositoryList = () => {
  return (
    <FlatList //Flatlist is special for render a list of items, View doesn't have scroll
      data={repositories} //The data for the list
      ItemSeparatorComponent={() => <Text />} //This isn't the right way to separate elements
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />} //What will the list do with that data
    />
  )
}

export default RepositoryList
