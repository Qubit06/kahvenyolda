import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import CheckBoxForm from './CheckBoxForm';
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
export default class SingUpForm extends Component {
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
                        returnKeyType={"next"}
                        autoCapitalize="none"
                        placeholder="Şifre ( En az 4 karakter)"
                        inputRef={input => this.phoneNumber = input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        width={95}
                    />
                    <Input
                        returnKeyType={"next"}
                        autoCapitalize="none"
                        placeholder="Ad Soyad"
                        inputRef={input => this.passwordInput = input}
                        onSubmitEditing={() => this.nameInput.focus()}
                        width={95}
                    />
                    <Input
                        returnKeyType={"done"}
                        keyboardType={"email-address"}
                        autoCapitalize="none"
                        placeholder="E Posta"
                        inputRef={input => this.nameInput = input}
                        width={95}

                    />
                    <CheckBoxForm />
                    <Button
                        color={COLORS.white}
                        backgroundColor={COLORS.brown}
                        text={"Üye Ol"}
                        borderColor={null}
                        borderWidth={null}
                    //  onPress={}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        height:height,
        marginVertical: hp("3%"),
        marginHorizontal: hp("5%"),
    },
    text: {
        marginVertical: 17,
        fontSize: FONTS.smallTextFont
    }
});