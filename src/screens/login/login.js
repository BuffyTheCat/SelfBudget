import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import Container from '../../components/container'
import CustomButton from '../../components/custom-button'
import { connect } from 'react-redux';
import { login } from '../../actions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = React.createRef();
        this.userPasswordRef = React.createRef();
        this.state = {
            userName: '',
            userPassword: '',
        };
    }

    render() {
        const { onSubmit, navigation } = this.props;

        return (
            <Container>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TextInput
                    style={styles.input}
                    ref={this.userNameRef}
                    onChangeText={(text) => this.setState({userName: text})}
                    placeholder="Username"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    />
                    <TextInput
                    style={styles.input}
                    ref={this.userPasswordRef}
                    onChangeText={(text) => this.setState({userPassword: text})}
                    placeholder="Password"
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    />
                    <CustomButton onButtonPress={() => onSubmit(navigation)}
                                  text="login"/>
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        width: '70%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: THEME.YELLOW_COLOR,
        shadowColor: THEME.BROWN_COLOR,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
    },
    input: {
        width: '70%',
        padding: 10,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
        marginBottom: 26
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (navigation) => {
            console.log(1);
            
            dispatch(login());
            navigation.navigate('MainFunctional');
        }

    }
}

export default connect(null, mapDispatchToProps)(Login);
