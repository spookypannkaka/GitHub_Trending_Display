import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function RepoCard({name, full_name, description, stargazers_count, forks_count, onPress}) {

    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <View style={{left: 5}}>
                <Text style={styles.titleText}>{name}</Text>
                <Text style={{position: 'absolute', right: 10, fontSize: 20, color: '#7835ac', fontWeight: 'bold'}}>{'>'}</Text>
                <Text style={{fontSize: 8}}>{full_name}</Text>
                <Text>{description}</Text>
                <View style={{flexDirection: 'row', gap: '5px'}}>
                    <Text style={{fontSize: 8}}>Forks: {forks_count}</Text>
                    <Text style={{fontSize: 8}}>Stars: {stargazers_count}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f3f3f3',
      width: '95%',
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