import * as React from 'react'
import {
    WebView,
    View,
    TouchableWithoutFeedback,
    Text,
} from 'react-native'

interface IProps {
    homeURI: string,
}

export default class extends React.Component<IProps> {
    public webView: WebView

    _refresh = () => {
        this.webView.reload()
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <WebView
                    javaScriptEnabled={true}
                    ref={(webView) => this.webView = webView}
                    source={{uri:this.props.homeURI}}
                    startInLoadingState={false}
                    scalesPageToFit={true}
                />
                <TouchableWithoutFeedback onPress={this._refresh}>
                    <View>
                        <Text>refresh</Text>    
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}