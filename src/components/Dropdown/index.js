import React, {memo} from 'react';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';

const Dropdown = ({
  data = ['Egypt', 'Canada', 'Australia', 'Ireland', '1', '1', '1'],
}) => {
  return (
    <SelectDropdown
      data={data}
      showsVerticalScrollIndicator={false}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
      buttonStyle={styles.btn}
      rowTextStyle={styles.title}
      buttonTextStyle={styles.title}
    />
  );
};

export default memo(Dropdown);
