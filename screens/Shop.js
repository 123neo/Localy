import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card, Button } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Shop extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        <Block flex>
          <Card item={articles[9]} horizontal />
          <Block flex row>
            <Card item={articles[10]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[11]} />
          </Block>
          <Block flex row>
            <Card item={articles[12]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[13]} />
          </Block>
          <Card item={articles[14]} horizontal />
          {/* <Card item={articles[4]} full />  */}
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default Shop;
