import {ScrollView, StyleSheet, Text, View} from "react-native";
import HeaderNavigationBar from "./Drawer";
import React, {Component} from 'react';
import {Icon, ListItem} from "react-native-elements";
import {Button, Card, TextInput} from "react-native-paper";

export default class ViewPass extends Component {

    state = {website: '', password: '', username: '', toEdit: -1};

    data = {
        name: "Google",
        passwords: [{user: 'Chaudhary@gmail.com', pass: 'Alpha1234'}, {
            user: 'Kasuri@gmail.com',
            pass: 'Beta@9876'
        }, {user: 'Kasuri@gmail.com', pass: 'Beta@9876'}]
    };

    getLeftItem = (i) => {
        if (this.state.toEdit === i) {
            return <Icon name={'delete'} size={20}/>
        }
        return {};
    };
    generateRandomPass = () => {

    };

    savePassword = () => {
        this.setState({toEdit: -1});
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderNavigationBar hamburger={false} subtitle={"View Password"} {...this.props} />
                <ScrollView>

                    <Card style={styles.cardStyle}>
                        <Text style={styles.title}>{this.data.name}</Text>
                        {this.data.passwords.map((pass, i) => {
                            return (
                                <Card key={i} style={styles.innerCardStyle}>
                                    <ListItem
                                        rightIcon={<Icon name={'edit'} onPress={() => this.setState({toEdit: i})}
                                                         size={20}
                                                         color={this.state.toEdit === i ? '#3c5a99' : 'grey'}/>}
                                        leftIcon={this.getLeftItem(i)}/>
                                    <Card.Content>
                                        <TextInput style={styles.textBox}
                                                   label="Username"
                                                   onChangeText={(text) => {
                                                       this.state.username = text;
                                                       this.setState({username: text})
                                                   }}
                                                   value={pass.user}
                                                   returnKeyType="next"
                                                   disabled={this.state.toEdit === i ? false : true}
                                        />
                                    </Card.Content>
                                    <Card.Content>
                                        <TextInput style={styles.textBox}
                                                   label="Password"
                                                   onChangeText={(text) => {
                                                       this.state.username = text;
                                                       this.setState({username: text})
                                                   }}
                                                   value={pass.pass}
                                                   returnKeyType="done"
                                                   disabled={this.state.toEdit === i ? false : true}
                                        />
                                    </Card.Content>
                                    {this.state.toEdit !== i ||
                                    <View style={styles.bottom}>
                                        <Button style={styles.buttonStyle} mode="contained"
                                                onPress={() => this.generateRandomPass()}>Random Pass</Button>
                                        <Button style={styles.buttonStyle2} mode="contained"
                                                onPress={() => this.savePassword()}>Save</Button>
                                    </View>}
                                </Card>
                            )
                        })}
                    </Card>

                </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    passBox: {
        height: 45,
        marginBottom: 1,
    },

    textBox: {
        margin: 2,
    },
    cardStyle: {
        // marginLeft: 8,
        // marginRight: 8,
    },
    innerCardStyle: {
        margin: 5,
    },
    title: {
        textAlign: 'center',
        fontSize: 45,
        color: '#3c5a99',
        marginTop: 5,
    },
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
    bottom: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,

    },

});
