import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, Menu } from 'react-native-paper';

const SelectAnchor = ({ error, label, value, onPress, style, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style}>
        <TextInput
          mode='outlined'
          value={value}
          label={label}
          error={error}
          right={<TextInput.Icon name='menu-down' />}
          editable={false}
          {...props}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const SelectInput = ({ value, error, label, style, options = [], onChangeValue = () => { }, onDismiss = () => { }, ...props }) => {
  const [visible, setVisible] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState(value || null);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const onItemPress = (value) => {
    setSelectValue(value);
    setVisible(false);
    onChangeValue(value);
  };

  const getMenuItems = (menuOptions) => {
    let menuItems = [];
    for (let option of menuOptions) {
      menuItems.push(<Menu.Item onPress={() => onItemPress(option.value)} title={option.name} key={option.value} />);
    }
    return menuItems;
  };

  const getOptionNameFromValue = (value) => {
    const option = options.find(option => option.value === value);
    return option ? option.name : null;
  };

  return (
    <Menu
      visible={visible}
      onDismiss={() => {
        closeMenu();
        onDismiss();
      }}
      anchor={<SelectAnchor
        onPress={openMenu}
        value={getOptionNameFromValue(selectValue)}
        label={label}
        error={error}
        style={style}
        {...props}
      />}
    >
      {getMenuItems(options)}
    </Menu>
  );
};

export default SelectInput;
