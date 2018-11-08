import * as React from 'react';
import { Animated, FlatList } from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

type Props = {
  data?: Array<Object>,
  scrollY?: any,
  headerHeight?: number,
  footerHeight?: number,
  disableOpacityAnimation?: boolean,
  disableScaleAnimation?: boolean,
  renderAnimatingHeader?: () => React.Element<*>,
  renderAnimatingFooter?: () => React.Element<*>,
  contentContainerStyle?: StyleProp,
  style?: StyleProp,
  props?: any,
  renderItem?: () => React.Element<*>,
}
export default class List extends React.Component<Props> {
  static defaultProps = {
    headerHeight: 100,
    footerHeight: 100,
    scrollEventThrottle: 16,
  };

  render() {
    const {
      scrollY,
      headerHeight,
      footerHeight,
      renderAnimatingHeader,
      renderAnimatingFooter,
      contentContainerStyle,
      props,
      data,
      renderItem,
    } = this.props

    const scrollYEvent = Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: true },
    )

    return (
      <AnimatedFlatList
        onScroll={scrollYEvent}
        keyExtractor={(item, index) => (index.toString())}
        {...props}
        contentContainerStyle={[
          { paddingTop: renderAnimatingHeader && headerHeight },
          { paddingBottom: renderAnimatingFooter && footerHeight },
          contentContainerStyle,
        ]}
        data={data}
        renderItem={renderItem}
      />
    )
  }
}
