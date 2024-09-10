import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';


export default function Result() {
    const route = useRoute();
    const {result} = route.params;
    return  (
        <View style={styles.container}>
            <Text style={styles.resultText}>Result: {result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        color: 'black',
    },
});