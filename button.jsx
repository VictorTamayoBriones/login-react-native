import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { LinearGradient } from "react-native-svg"

export const ButtonGradient = () =>{
    return(
        <TouchableOpacity style={styles.container}>
        <LinearGradient
            // Button Linear Gradient
            colors={['#FFB677', '#FF3CBD']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}    
            style={styles.button}
        >
            <Text style={styles.text}>SIGN IN</Text>
        </LinearGradient>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: '80%',
        height: 50
    }
})