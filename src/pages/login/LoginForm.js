import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Input from '../../components//Input';
import Button from '../../components/Button';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    color={COLORS.white}
                    backgroundColor={COLORS.blue}
                    text={"Facebook ile Bağlanın"}
                    borderColor={null}
                    borderWidth={null}
                //  onPress={}
                />
                <View style={{ flexDirection: "row", width: width }}>
                    <Input
                        returnKeyType={"next"}
                        keyboardType={"phone-pad"}
                        autoCapitalize="none"
                        placeholder="Ülke Kodu"
                        width={30}
                        onSubmitEditing={() => this.codeInput.focus()}
                    />

                    <Input
                        returnKeyType={"next"}
                        keyboardType={"phone-pad"}
                        autoCapitalize="none"
                        placeholder="Cep Telefonu"
                        inputRef={input => this.codeInput = input}
                        onSubmitEditing={() => this.phoneNumber.focus()}
                        width={60}
                    />

                </View>

                <Input
                    returnKeyType={"done"}
                    autoCapitalize="none"
                    placeholder="Şifre ( En az 4 karakter)"
                    inputRef={input => this.phoneNumber = input}
                    width={95}
                />
                <Button
                    color={COLORS.white}
                    backgroundColor={COLORS.brown}
                    text={"Giriş Yap"}
                    borderColor={null}
                    borderWidth={null}
                //  onPress={}
                />
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("SingUp")}
                    >
                        <Text style={styles.singUpText}>Şifremi Unuttum</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: hp("10%") }}>
                    <Button
                        color={COLORS.brown}
                        backgroundColor={COLORS.bodyBackground}
                        onPress={() => {
                            this.props.navigation.navigate("SingUp")
                        }}
                        text={"Üye Ol"}
                        borderColor={COLORS.brown}
                        borderWidth={2}
                    //  onPress={}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        height: height,
        marginVertical: hp("3%"),
        marginHorizontal: hp("5%"),
    },
    forgotPasswordContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp("5%")
    },
    singUpText: {
        fontSize: FONTS.inputTextFont,
        fontWeight: "500",
        color: COLORS.black,
        paddingBottom: hp("1%")
    },

});