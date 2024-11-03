import {
    View,
    Text,
    StyleSheet,
} from "react-native"

export default function ProgressBar ({percentage, progressColor})  {
    // this function renders a progress bar
    // percentage: int where n > 1
    // progress color: color of progress bar
    return (
        <View style={styles.progressBarWrapper}>
            
            <Text style={{fontWeight: 'bold'}}>{percentage * 100}%</Text>
            <View style={[styles.progressBarContainer, ]}>
                <View style={{backgroundColor: progressColor, flex: percentage, borderRadius: 10}}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        columnGap: 5,
    },
    progressBarContainer: {
        // container for progress bar, fills all of height max of 25
        backgroundColor: 'whitesmokeHkH',
        borderRadius: 10,
        flex: 1,
        height: "100%",
        maxHeight: 25,
        flexDirection: 'row',
    },
})

