import { useState } from "react";
import {  
    StyleSheet, 
    Keyboard, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    View, 
    Image,
    Text,
    TextInput,
    Platform,
    Pressable
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import img from '../assets/img.png'

export default function HomeContent({ navigation }) {
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);

    const calculate = () => {
        const delta = valueB * valueB - 4 * valueA * valueC;
        let result;
        if (delta < 0) {
            result = 'Phương trình vô nghiệm';
        } else if (delta === 0) {
            result = `Nghiệm kép: x1 = x2 = ${-valueB / (2 * valueA)}`;
        } else {
            const x1 = (-valueB + Math.sqrt(delta)) / (2 * valueA);
            const x2 = (-valueB - Math.sqrt(delta)) / (2 * valueA);
            result = `x1 = ${x1}, x2 = ${x2}`;
        }
        alert('ấdasds')
        // Gửi dữ liệu sang màn hình Result
        navigation.navigate('Result', { result });
    };

    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                 style={styles.container}
                 behavior={Platform.OS === "ios" ? "padding" : "height"}  // Cài đặt behavior tùy thuộc vào nền tảng
                 keyboardVerticalOffset={120}  // Điều chỉnh offset nếu cần
            >
                <View style={styles.container}>
                    <Image
                        style={{borderWidth: 1, borderColor: 'red'}}
                        source={img}
                    />
                    <Text style={styles.title}>Ax2 + Bx + C = 0</Text>
                    <View style={{}}>
                        <View>
                        {/* <Text style={{marginTop: 10, color: 'blue'}}>Nhập a</Text> */}
                        <TextInput
                            placeholder="Enter A"
                            maxLength={5}
                            editable
                            style={styles.bodyInput}
                            onChangeText={(a) => setValueA(a)}
                            keyboardType='numeric'
                        />
                        </View>
                        <View>
                        {/* <Text style={{marginTop: 10, color: 'blue'}}>Nhập b</Text> */}
                        <TextInput
                            placeholder="Enter B"
                            maxLength={5}
                            editable
                            style={styles.bodyInput}
                            onChangeText={(b) => setValueB(b)}
                            keyboardType='numeric'
                        />
                        </View>
                        <View>
                        {/* <Text style={{marginTop: 10, color: 'blue'}}>Nhập c</Text> */}
                        <TextInput
                            placeholder="Enter C"
                            maxLength={5}
                            editable
                            style={styles.bodyInput}
                            onChangeText={(c) => setValueC(c)}
                            keyboardType='numeric'
                        />
                        </View>
                    </View>
                    <View style={styles.containerButton}>
                        <Pressable
                            style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#dddddd' : '#4CAF50',
                            },
                            styles.button,
                            ]}
                            onPress={calculate}
                        >
                        <Text style={styles.text}>Calculate</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: 'red',
        margin: 20
    },
    bodyInput: {
        borderBottomWidth: 1,
        borderColor: 'blue',
        padding: 10,
        width: 200,
        marginBottom: 10
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
        marginTop: 20
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3, // Android shadow
      },
      text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
  });