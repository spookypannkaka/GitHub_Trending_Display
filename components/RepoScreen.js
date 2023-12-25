import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function RepoScreen({ route, navigation }) {
    const { repo } = route.params;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()} style={styles.goBackPressable}>
                <Text style={{ left: 5, fontSize: 10, fontWeight: 'bold'}}>{'< Go Back'}</Text>
            </Pressable>

            <Text style={styles.titleText}>{repo.name}</Text>
        </View>

        <Text style={{fontSize: 16}}>{repo.description}</Text>
        <Text>Language: {repo.language}</Text>
        {repo.license && (
            <Text>License: {repo.license.key}</Text>
        )}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        backgroundColor: '#7835ac',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goBackPressable: {
        backgroundColor: '#f3f3f3',
        position: 'absolute',
        left: 5,
        top: 10,
        width: 65,
        borderWidth: 2,
        borderRadius: 1,
        borderColor: 'black',
    },
    titleText: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
    }
  });