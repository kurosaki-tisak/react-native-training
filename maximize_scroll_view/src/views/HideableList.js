import * as React from 'react';
import {
    Animated,
    View,
    LayoutAnimation,
} from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import Header from './Header';
import Footer from './Footer';
import List from './List';
import Item from './Item';

type Props = {
    data: Array,
    childListProps: any,
    renderItem: () => React.Element<*>,
    headerHeight: number,
    footerHeight: number,
    renderAnimatingHeader: () => React.Element<*>,
    renderAnimatingFooter: () => React.Element<*>,
    style: StyleProp,
    disableScaleAnimation: boolean,
    disableOpacityAnimation: boolean,
}

export default class HideableList extends React.Component<Props> {

    static defaultProps = {
        headerHeight: 100,
        footerHeight: 100,
        scrollEventThrottle: 16
    };

    constructor(props) {
        super(props)
        this.state = {
            scrollY: new Animated.Value(0),
        }
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderMainList()}
                {this.props.renderAnimatingHeader && this.renderHeader()}
                {this.props.renderAnimatingFooter && this.renderFooter()}
            </View>
        )
    }

    renderMainList() {
        return (
            <List
                scrollY={this.state.scrollY}
                {...this.props}
                renderItem={this.renderRow}
            />
        )
    }

    renderHeader() {
        return (
            <Header
                headerHeight={this.props.headerHeight}
                scrollY={this.state.scrollY}
                disableOpacityAnimation={this.props.disableOpacityAnimation}
                disableScaleAnimation={this.props.disableScaleAnimation}
                renderAnimatingHeader={this.props.renderAnimatingHeader}
            />
        )
    }

    renderFooter() {
        return (
            <Footer
                footerHeight={this.props.footerHeight}
                scrollY={this.state.scrollY}
                disableOpacityAnimation={this.props.disableOpacityAnimation}
                disableScaleAnimation={this.props.disableScaleAnimation}
                renderAnimatingFooter={this.props.renderAnimatingFooter}
            />
        )
    }

    renderRow = (rowData) => {
        return this.renderItemBlock(rowData)
    }

    renderItemBlock = rowData => <Item renderItem={this.props.renderItem} rowData={rowData} />
}
