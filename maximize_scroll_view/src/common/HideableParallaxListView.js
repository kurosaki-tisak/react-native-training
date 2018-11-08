import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, ScrollView, Animated } from 'react-native';

const screen = Dimensions.get('window');

class HideableParallaxListView extends Component {

    constructor(props) {   
        super(props);
        
        this.state = {
        scrollY: new Animated.Value(0),
        windowHeight: PropTypes.number,
        backgroundHeaderSource: PropTypes.oneOfType([
            PropTypes.shape({
                uri: PropTypes.string,
            }),
            PropTypes.number
        ]),
        backgroundFooterSource: PropTypes.oneOfType([
            PropTypes.shape({
                uri: PropTypes.string,
            }),
            PropTypes.number
        ]),
        header: PropTypes.node,
        contentInset: PropTypes.object
    }

    this.props = {
        windowHeight: 300,
        contentInset: {
            top: screen.scale
        }
    }
    }

    setNativeProps(nextProps) {
        this._scrollView.setNativeProps(nextProps);
    }

    renderBackgroundHeader = () => {
        const { windowHeight, backgroundHeaderSource } = this.props;
        const { scrollY } = this.state;

        if (!windowHeight || !backgroundHeaderSource) {
            return null;
        }

        return (
            <Animated.Image
                style={[styles.background, {
                    height: windowHeight,
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [ -windowHeight, 0, windowHeight ],
                            outputRange: [ windowHeight/2, 0, -windowHeight/3 ]
                        })
                    }, {
                        scale: scrollY.interpolate({
                            inputRange: [ -windowHeight, 0, windowHeight ],
                            outputRange: [ 2, 1, 1 ]
                        })
                    }]
                }]}
                source={backgroundHeaderSource}
            >
            </Animated.Image>
        );
    }

    renderHeader = () => {
        const { windowHeight, backgroundHeaderSource } = this.props;
        const { scrollY } = this.state;

        if (!windowHeight || !backgroundHeaderSource) {
            return null;
        }

        return (
            <Animated.View
                style={{
                    position: 'relative',
                    height: windowHeight,
                    opacity: scrollY.interpolate({
                        inputRange: [ -windowHeight, 0, windowHeight / 1.2],
                        outputRange: [ 1, 1, 0 ]
                    }),
                }}
            >
                {this.props.header}
            </Animated.View>
        );
    }

    render() {
        const { style, ...props } = this.props;

        return(
            <View style={[ styles.container, style ]}>
                {this.renderBackgroundHeader()}
                <ScrollView
                    ref={component => { this._scrollView  = component }}
                    {...props}
                    style={styles.scrollView}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY }}}]
                    )}
                    scrollEventThrottle={16}
                >
                    {this.renderHeader()}
                    <View style={[ styles.content, props.scrollableViewStyle ]}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HideableParallaxListView;

const styles = {
    container: {
        flex: 1,
        borderColor: 'transparent'
    },

    scrollView: {
        backgroundColor: 'transparent'
    },

    background: {
        position: 'absolute',
        backgroundColor: '#2e2f31',
        width: screen.width,
        resizeMode: 'cover'
    },

    content: {
        shadowColor: '#222',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column'     
    }
}