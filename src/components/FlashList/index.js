import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import ListFooter from './Sections/ListFooter';
import colors from '../../assets/style/colors';

const InfiniteFlashList = ({
  data = [],
  isLoading = false,
  refreshing = false,
  emptyText = '',
  renderItem = () => {},
  onEndReached = () => {},
  onEndReachedThreshold = 0.75,
  onRefresh = () => {},
  keyExtractor = () => {},
  removeClippedSubviews = false,
  renderListEmpty = null,
  renderListFooter = null,
  renderListHeader = null,
  getRef = () => {},
  estimatedItemSize = 200,
  contentContainerStyle,
}) => {
  if (isLoading || refreshing) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={30} color={colors.mainColor} />
      </View>
    );
  }

  return (
    <FlashList
      contentContainerStyle={contentContainerStyle}
      ref={getRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      // {...props}
      removeClippedSubviews={removeClippedSubviews}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={estimatedItemSize}
      ListFooterComponent={() => {
        if (renderListFooter) {
          return renderListFooter;
        }
        return <ListFooter loading={isLoading} />;
      }}
      ListHeaderComponent={() => {
        if (renderListHeader) {
          return renderListHeader();
        }
        return null;
      }}
    />
  );
};

export default InfiniteFlashList;
