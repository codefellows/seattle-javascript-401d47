import { StatusBar } from 'expo-status-bar';
import { Box, Button, Center, Heading, HStack, NativeBaseProvider, VStack } from 'native-base';
import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList } from 'react-native';
import useGetAxios from './hooks/useGetAxios';
import { LinearGradient } from 'expo-linear-gradient';
import ScrollableTileList from './components/ScrollableTileList';
import PressableButton from './components/PressableButton'

export default function App() {

  const { results, getNext, next } = useGetAxios('https://pokeapi.co/api/v2/pokemon');

  // console.log(results);

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };

  return (
    <NativeBaseProvider config={config}>
      <SafeAreaView style={styles.androidSafeArea}>
        <Box
          bg={{
            linearGradient: {
              colors: ['primary.600', 'orange.200'],
              start: [0, 0],
              end: [1, 0]
            }
          }}>
          <Heading size="xl" textAlign="center">Pokemon App</Heading>
          {/* <Box alignItems="center">
            <Button onPress={() => getNext(next)}>Next 20 Pokemon</Button>
          </Box> */}
          <VStack space={3} alignItems="center" >
            <ScrollableTileList

              // numColumns={2}
              data={results}
              render={(item) =>
                // <PressableButton
                //   key={item.name}
                //   bgColor='teal'
                //   textColor="white"
                // >
                //   {item.name}
                //   </PressableButton>
                <Center
                  key={item.name}
                  w="45%"
                  bg="cyan.800"
                  // bg={{
                  //   linearGradient: {
                  //     colors: ['red.300', 'violet.800'],
                  //     start: [0, 0],
                  //     end: [1, 0]
                  //   }
                  // }}
                  p="2"
                  m="1"
                  rounded="xl"
                  _text={{
                    fontSize: 'md',
                    // lineHeight: 'sm',
                    fontWeight: 'medium',
                    color: 'warmGray.50',
                    textAlign: 'center'
                  }}
                >
                  {item.name}
                </Center>
                }
            />


          </VStack>

          <StatusBar style="auto" />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 50 : 0
  },
});
