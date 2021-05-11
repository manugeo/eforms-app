import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { TextInput, Menu } from 'react-native-paper';
import theme from '../theme';


const DEFAULT_MENU_ITEM_WIDTH = 240;

const styles = StyleSheet.create({
  anchorElement: {
    height: 1
  }
});

const AnchorElement = ({ onLayout }) => {
  return (
    <View onLayout={onLayout} style={styles.anchorElement}></View>
  );
};

const SelectInput = ({ value, error, label, style, options = [], onChangeValue = () => { }, onDismiss = () => { }, ...props }) => {
  const [visible, setVisible] = useState(false);
  const [selectValue, setSelectValue] = useState(value || null);
  const [anchorWidth, setAnchorWidth] = useState(DEFAULT_MENU_ITEM_WIDTH);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const onItemPress = (value) => {
    setSelectValue(value);
    setVisible(false);
    onChangeValue(value);
  };
  const onAnchorLayoutChange = (event) => {
    const width = event?.nativeEvent?.layout.width || DEFAULT_MENU_ITEM_WIDTH;
    setAnchorWidth(width);
  };
  const getMenuItems = (menuOptions) => {
    let menuItems = [];
    for (let option of menuOptions) {
      menuItems.push(<Menu.Item
        title={option.name}
        key={option.value}
        style={{ width: anchorWidth, maxWidth: anchorWidth }}
        onPress={() => onItemPress(option.value)}
      />);
    }
    return menuItems;
  };

  const getOptionNameFromValue = (value) => {
    const option = options.find(option => option.value === value);
    return option ? option.name : null;
  };

  return (
    <TouchableWithoutFeedback onPress={openMenu}>
      <View style={style}>
        <TextInput
          mode='outlined'
          selectionColor={theme.colors.textPrimary}
          value={getOptionNameFromValue(selectValue)}
          label={label}
          error={error}
          right={<TextInput.Icon name='menu-down' />}
          editable={false}
          {...props}
        />

        <Menu
          visible={visible}
          onDismiss={() => {
            closeMenu();
            onDismiss();
          }}
          anchor={<AnchorElement onLayout={onAnchorLayoutChange} />}
          contentStyle={styles.menu}
        >
          {getMenuItems(options)}
        </Menu>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectInput;
