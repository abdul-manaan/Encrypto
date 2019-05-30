import React, {Component} from 'react';
import {Text, View,} from 'react-native';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import HeaderNavigationBar from './components/Drawer'
import HomeScreen from './components/Home'
import AddPass from "./components/AddPass";
import ViewPass from "./components/ViewPass";
import SplashScreen from "./components/SplashScreen";
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'


export class InfoScreen extends Component {
    state = {pass: ''};

    pinInput = React.createRef();

    _checkCode = (code) => {
        if (code != '1234') {
            this.pinInput.current.shake()
                .then(() => this.setState({pass: ''}));
        }
    };

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderNavigationBar {...this.props} />
            <SmoothPinCodeInput password mask="﹡"
                                cellStyle={{
                                    borderWidth: 2,
                                    borderColor: 'gray',
                                }}
                                cellStyleFocused={{
                                    borderColor: 'black',
                                }}
                                value={this.state.pass}
                                ref={this.pinInput}
                                onFulfill={this._checkCode}
                                onTextChange={code => this.setState({pass: code})}
            />


            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    This is Info Screen
                </Text>

            </View>
        </View>);
    }

}

export const Main = createDrawerNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        Home: {
            screen: HomeScreen
        },
        Info: {
            screen: InfoScreen
        },
        AddPass: {
            screen: AddPass
        },
        ViewPass: {
            screen: ViewPass
        }
    }, {
        initialRouteName: 'Home'
    }
);

const App = createAppContainer(Main);

export default App;
