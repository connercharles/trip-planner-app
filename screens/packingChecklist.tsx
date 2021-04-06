import Banner from '../components/Banner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function PackingChecklist(data : string[]) {

    return (
        <SafeAreaView style={styles.container}>
            <Banner showBack= {true}/>

        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.pageBackground
    }
});