import {ScrollView, StyleSheet, View} from "react-native";
import HeaderNavigationBar from "./Drawer";
import React, {Component} from 'react';
import {ListItem, SearchBar} from "react-native-elements";
import {FAB} from "react-native-paper";

export default class HomeScreen extends Component {

    state = {
        search: '',
        passToShow: ['Facebook', 'Gmail', 'Google', 'Github', 'Steam', 'Twitter', 'Zambeel', 'LMS', 'Fever', 'CodeLab', 'Facebook', 'Gmail', 'Google', 'Github', 'Steam', 'Twitter', 'Zambeel', 'LMS', 'Fever', 'CodeLab']
    };

    updateSearch = search => {
        this.setState({search: search});
    };


    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderNavigationBar hamburger={true} subtitle={"Home"} {...this.props} />

                <View style={{alignItems: 'center'}}>
                    <SearchBar
                        containerStyle={styles.inputContain}
                        inputContainerStyle={styles.innerContainer}
                        lightTheme={true}
                        placeholder="Search app..."
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                    />
                </View>

                <ScrollView>
                    <View>
                        {
                            this.state.passToShow.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={l}
                                    containerStyle={styles.passBox}
                                    rightIcon={{name: 'chevron-right'}}
                                    onPress={() => {
                                        alert('sd')
                                    }}
                                />
                            ))
                        }
                    </View>

                </ScrollView>

                <FAB
                    style={styles.add}
                    icon="add"
                    onPress={() => {
                        alert('sd')
                    }}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    inputContain: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    innerContainer: {
        borderRadius: 30,
        width: 300,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    passBox: {
        height: 45,
        marginBottom: 1,
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 10,
    },
    add: {
        backgroundColor: '#3c5a99',
        position: 'absolute',
        bottom: 25,
        right: 15,
    },
});
