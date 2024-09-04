/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Modal,
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';
// importing progress bar component
import ProgressBar from '../../components/ProgressBar';


const data = [
    // mock data for visualization
    {
        name: 'Morning',
        consumption: 1.28,
        color: '#EB5353',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: 'Afternoon',
        consumption: 2.2,
        color: '#F9D923',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: 'Evening',
        consumption: 0.88,
        color: '#36AE7C',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
    {
        name: 'Night',
        consumption: 3.5,
        color: '#187498',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
    },
];



export default function DailyConsumptionModal () {
    /*

    */

    return (
           <View style={styles.mainCardContainer}>

              <View style={styles.headerTextWrapper}>
              {/* wrapper for the header texts of card */}
                  <Text style={styles.mediumBoldText}>Avg. Daily Consumption</Text>
                  <Text style={[styles.largeRegularText, styles.consumptionText]}>....... kWh</Text>
                  <Text style={styles.smallText}>As of ......</Text>
              </View>


              <View style={styles.chartWrapper}>
                  {/* chart here! */}
                  <Text>Insert Chart here...</Text>
                  <Text>Insert Chart here...</Text>
                  <Text>Insert Chart here...</Text>
                  <Text>Insert Chart here...</Text>
              </View>
              <View style={styles.chartInfoWrapper}>

                  <View style={styles.textWrapper}>
                      <Text style={[styles.regularTextBold]}>Throughout the day</Text>
                      <Text style={[styles.regularText]}>You're consumption peaks during the night, and lowest in the evening.</Text>
                  </View>


                  <View style={{rowGap: 8}}>
                  {/* progress bars */}
                      <ProgressBar
                      percentage={0.2}
                      progressColor={'#EB5353'}
                       />
                      <ProgressBar
                      percentage={0.5}
                      progressColor={'#F9D923'}
                       />
                      <ProgressBar
                      percentage={0.1}
                      progressColor={'#36AE7C'}
                       />
                      <ProgressBar
                      progressColor={'#187498'}
                      percentage={0.2}
                       />
                  </View>

                  <View style={styles.textWrapper}>
                      <Text style={styles.regularTextBold}>Did you know?</Text>
                  <Text style={[styles.regularText]}>You are <Text style={ {fontWeight: 'bold', color: '#EB5353'}}>above average</Text> on daily consumption in Manila, Philippines.</Text>

                  </View>

              </View>
          </View>

    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingTop: StatusBar.currentHeight + 10, // for responsive resizing of card
        paddingBottom: StatusBar.currentHeight,
        paddingHorizontal: 10,
    },
    mainCardContainer:{
        // main card that contains all info (chart, headertexts, chatinfo)
        rowGap: 15,
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: 'flex-start',
        // occupy all of maincontainer
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 12,
        elevation: 3,
    },
    // text presets
    mediumBoldText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    largeRegularText: {
        fontSize: 28,
    },
    smallText: {
      fontSize: 14,
      color: 'lightgrey',
    },
    regularTextBold: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    regularText: {
        fontSize: 16,
    },

    headerTextWrapper: {
        rowGap: 5,
    },
    // container for info wrapper (with the progress bars)
    chartInfoWrapper: {
        rowGap: 20,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        borderRadius: 12,
        elevation: 3,
    },
    chartWrapper: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textWrapper: {
        rowGap: 5,
    },
});
