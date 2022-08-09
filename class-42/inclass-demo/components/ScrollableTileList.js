import { ScrollView, HStack } from "native-base";

const ScrollableTileList = ({data, render}) => {
  const Stack = () => data ?
    <HStack space={3} justifyContent="center" flexWrap="wrap">
      {data.map((pokemon) => render(pokemon))}
    </HStack>
    : null;
  

  return(
    <ScrollView mb="50">
      <Stack />
    </ScrollView>
  )
};

export default ScrollableTileList;
