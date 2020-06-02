import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Container from '../../components/container'
import { Picker } from '@react-native-community/picker';
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { THEME } from '../../theme';

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const data = [
    {
      name: "Food",
      spend: 21500000,
      color: THEME.PINK_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Electronic",
      spend: 2800000,
      color: THEME.YELLOW_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Car",
      spend: 527612,
      color: THEME.GREEN_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Fun",
      spend: 8538000,
      color: THEME.GREY_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Bar",
      spend: 11920000,
      color: THEME.BROWN_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  
  
class Statistic extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = React.createRef();
        this.userPasswordRef = React.createRef();
        this.state = {
            range: 'today',
        };
    }

    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Text>
                    Statistic {this.state.range}
                </Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.range}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({range: itemValue})
                    }>
                    <Picker.Item label="Today" value="today" />
                    <Picker.Item label="This Week" value="week" />
                    <Picker.Item label="This Month" value="month" />
                    <Picker.Item label="This Year" value="year" />
                </Picker>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="spend"
                    backgroundColor="transparent"
                    absolute={false}
                />
            </Container>
        )

    }
}

const styles = StyleSheet.create({
    picker: {
        width: '100%',
        marginBottom: 36,
    },
});

export default Statistic;