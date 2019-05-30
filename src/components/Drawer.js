import {StyleSheet} from "react-native";
import React, {Component} from "react";
import {Appbar} from 'react-native-paper';

export default class HeaderNavigationBar extends Component {
    render() {
        return (<Appbar.Header style={styles.textHead}>
                {!this.props.hamburger ||
                <Appbar.Action icon="menu" onPress={() => this.props.navigation.toggleDrawer()}/>}
                {this.props.hamburger ||
                <Appbar.Action icon="chevron-left" onPress={() => this.props.navigation.goBack()}/>}
                <Appbar.Content
                    title='Encrypto'
                    subtitle={this.props.subtitle}
                />

            </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({

    textHead: {
        backgroundColor: '#3c5a99',
    }
});
