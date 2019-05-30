import {StyleSheet, View} from "react-native";
import HeaderNavigationBar from "./Drawer";
import React, {Component} from 'react';
import {Button, Card, TextInput, Title} from "react-native-paper";

export default class AddPass extends Component {

    state = {website: '', password: '', username: '',};


    generateRandomPass = () => {
        let pass = 'al12jTas123';
        this.setState({password: pass});
    };
    savePassword = () => {
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderNavigationBar hamburger={false} subtitle={"Add new Password"}{...this.props} />

                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Title>Enter your Information below:</Title>

                        <TextInput style={styles.textBox}
                                   label="Website Name"
                                   onChangeText={(text) => {
                                       this.state.website = text;
                                       this.setState({website: text})
                                   }}
                                   value={this.state.website}
                                   returnKeyType="next"
                                   underlineColorAndroid="transparent"

                        />
                    </Card.Content>
                    <Card.Content>
                        <TextInput style={styles.textBox}
                                   label="Username"
                                   onChangeText={(text) => {
                                       this.state.username = text;
                                       this.setState({username: text})
                                   }}
                                   value={this.state.username}
                                   returnKeyType="next"

                        />
                    </Card.Content>
                    <Card.Content>
                        <TextInput style={styles.textBox}
                                   label="Password"
                                   onChangeText={(text) => {
                                       this.state.password = text;
                                       this.setState({password: text})
                                   }}
                                   value={this.state.password}

                        />
                    </Card.Content>

                </Card>
                <View style={styles.bottom}>
                    <Button style={styles.buttonStyle} mode="contained" onPress={() => this.generateRandomPass()}>Random
                        Pass</Button>
                    <Button style={styles.buttonStyle2} mode="contained"
                            onPress={() => this.savePassword()}>Save</Button>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 2,
        width: '50%',
        backgroundColor: '#3c5a99',
        borderRadius: 30,
    },
    buttonStyle2: {
        backgroundColor: '#3c5a99',
        margin: 2,
        width: '48%',
        borderRadius: 30,
    },
    passBox: {
        height: 45,
        marginBottom: 1,
    },

    bottom: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 8,
        marginRight: 8,

    },

    textBox: {
        margin: 2,
    },
    cardStyle: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
    },

});
