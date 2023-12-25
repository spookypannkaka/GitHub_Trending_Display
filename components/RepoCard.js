import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function RepoCard({name, full_name, description, stargazers_count, forks_count}) {

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={{position: 'absolute', right: 10, fontSize: 20, color: '#7835ac', fontWeight: 'bold'}}>{'>'}</Text>
            <Text style={{fontSize: 8}}>{full_name}</Text>
            <Text>{description}</Text>
            <Text>Forks: {forks_count}</Text>
            <Text>Stars: {stargazers_count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f3f3f3',
      width: '95%',
      //height: '100px',
      marginVertical: 10,

      borderWidth: 5,
      borderRadius: 10,
      borderColor: '#7835ac',
    },
    titleText: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    }
  });