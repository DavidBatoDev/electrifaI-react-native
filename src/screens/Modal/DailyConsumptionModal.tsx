import {
    Modal,
    ScrollView,
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import PieChart from '../../components/PieChart';
import { FlatList } from 'react-native-gesture-handler';

const colorScale=["#00A4FF", "#0D82C4", "#0C6CA2", "#0A517A"] // color scale for the progress bars
const data=[
    { x: "30%", y: 30 },
    { x: "35%", y: 35 },
    { x: "25%", y: 25 },
    { x: "10%", y: 10 },
] // pie chart data x: label, y: value

export default function DailyConsumptionModal () {

    return (
        <ScrollView>
           <View style={styles.mainCardContainer}>

                <View style={styles.headerTextWrapper}>
                {/* wrapper for the header texts of card */}
                    <Text style={styles.mediumBoldText}>Average Daily Consumption</Text>
                    <Text style={[styles.largeRegularText, styles.consumptionText]}>23.49 kWh</Text>
                    <Text style={styles.smallText}>As of 11:29 PM</Text>
                </View>


                <View style={styles.chartWrapper}>
                    {/* pie chart component */}
                    <PieChart
                    data={data}
                    ></PieChart>
                </View>
                <View style={styles.chartInfoWrapper}>

                    <View style={styles.textWrapper}>
                        <Text style={[styles.regularTextBold]}>Throughout the day</Text>
                        <Text style={[styles.regularText]}>You're consumption peaks during the night, and lowest in the evening.</Text>
                    </View>


                    <View style={{rowGap: 8}}>
                        {data.map((item, index) => {
                            return (
                                <ProgressBar
                                    key={index}
                                    percentage={item.y / 100}
                                    progressColor={colorScale[index]}
                                />
                            );
                        })}

                    </View>

                    <View style={styles.textWrapper}>
                        <Text style={styles.regularTextBold}>Did you know?</Text>
                    <Text style={[styles.regularText]}>You are <Text style={ {fontWeight: 'bold', color: ''}}>above average</Text> on daily consumption in Manila, Philippines.</Text>

                    </View>

                </View>
            </View>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    mainCardContainer:{
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',
        backgroundColor: 'whitesmoke',
        flex: 1,
    },
    // text presets
    mediumBoldText: {
        color: "#0D82C4",
        fontWeight: 'bold',
        fontSize: 18,
    },
    largeRegularText: {
        fontSize: 28,
    },
    smallText: {
      fontSize: 14,
      color: 'grey',
    },
    regularTextBold: {
        color: "#0D82C4",
        fontWeight: 'bold',
        fontSize: 16,
    },
    regularText: {
        fontSize: 16,
    },

    headerTextWrapper: {
        rowGap: 5,
        paddingHorizontal: 10,
    },
    // container for info wrapper (with the progress bars)
    chartInfoWrapper: {
        rowGap: 20,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        borderRadius: 12,
    },
    chartWrapper: {
        // container for the pie chart
        marginTop: -20,
        marginBottom: -10,
        color: "#0D82C4",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    textWrapper: {
        rowGap: 5,
    },
});
