import React, { Component } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import SearchPopularList from './SearchPopularList';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import Voice from '@react-native-community/voice';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('window').width;
export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchText: ''
        };
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
        this.onSpeechStart = this.onSpeechStart.bind(this);
        this.onSpeechEnd = this.onSpeechEnd.bind(this);

    }


    onSpeechResults(e) {
        if (e.value) {
            this.setState({
                searchText: '',
                results: e.value,
                loading: false,

            })
        }
    }

    onSpeechStart() {
        this.setState({
            loading: true,
        });
        Voice.start('tr_TR');
    }

    onSpeechEnd() {
        this.setState({
            loading: false,
        });
        Voice.stop();
    }

    handleSearchChange = (e) => {
        if (this.state.results.length > 0) {
            this.setState({
                searchText: this.state.results[0],
                results: []
            })
        } else if (this.state.results.length <= 0) {
            this.setState({
                searchText: e
            })
        }
    }

    calculatedSearchText = () =>
        this.state.searchText && this.state.searchText.length > 0 ?
            this.state.searchText :
            this.state.results[0];

    render() {
        return (

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                
                    placeholder="Ürün Ara"
                    returnKeyType={"done"}
                    autoCapitalize="none"
                    underlineColorAndroid="transparent"
                    onChangeText={e => this.handleSearchChange(e)}
                    value={this.calculatedSearchText()}
                />
                <FontAwesome5
                    name="search"
                    color={COLORS.brown}
                    //type='evilicon'
                    style={{ position: "absolute", paddingVertical: hp("1.5%"), paddingLeft: wp("2%") }}
                    size={20}
                />
                <TouchableOpacity style={styles.microphoneButton}
                    onPressIn={this.onSpeechStart}
                    onPressOut={this.onSpeechEnd}
                    activeOpacity={100}
                >
                    <FontAwesome5
                        name="microphone"
                        color={this.state.loading ? 'green' : COLORS.brown}
                        style={{ position: "absolute", paddingVertical: hp("1.5%"), paddingRight: wp("1%") }}
                        size={this.state.loading ? 28 : 20}
                    />
                </TouchableOpacity>
                <View style={styles.a}>
                    <Text style={styles.text}>Popüler Arama</Text>
                </View>
                <View>
                    <SearchPopularList />
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        backgroundColor: COLORS.brownLite,
        paddingLeft: wp("8%"),
        fontSize: FONTS.mediumTextFont,
        height: hp("6%"),
        width: width
    },
    microphoneButton: {
        width: wp("12%"),
        height: hp("6%"),
        right: 0,
        alignItems: "center",
        position: "absolute",
    },
    text:{
        color:COLORS.brown,
        fontSize:FONTS.mediumTextFont,
        fontWeight:"500"
    },
    a:{
        justifyContent:"center",
        marginTop:hp("2.7%"),
        marginBottom:hp("1.5%"),
        marginLeft:wp("2%")
    }
});
