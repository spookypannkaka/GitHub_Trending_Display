import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Header({language, onLanguageChange}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>GitHub Trending Repositories</Text>
            <Text>Language:</Text>
            <Picker
                selectedValue={language}
                onValueChange={(itemValue) =>
                    onLanguageChange(itemValue)
                }
            >
                <Picker.Item label="Top Overall" value="overall" />
                <Picker.Item label="JavaScript" value="JavaScript" />
                <Picker.Item label="TypeScript" value="TypeScript" />
                <Picker.Item label="Go" value="Go" />
                <Picker.Item label="Rust" value="Rust" />
                <Picker.Item label="Swift" value="Swift" />
                <Picker.Item label="Web" value="Web" />
                <Picker.Item label="PHP" value="PHP" />
                <Picker.Item label="CSS" value="CSS" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="C#" value="C#" />
                <Picker.Item label="C++" value="C++" />
                <Picker.Item label="Python" value="Python" />
                <Picker.Item label="Ruby" value="Ruby" />
                <Picker.Item label="Java" value="Java" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7835ac',
        height: 100,
        width: '100%',
        alignItems: 'center',
    },
    titleText: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
    }
});