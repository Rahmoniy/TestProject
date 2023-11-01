import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const SwitchC = ({onChange = () => {}, isActive = false, disabled = false}) => {
  const [isEnabled, setIsEnabled] = useState(isActive);
  const toggleSwitch = v => {
    setIsEnabled(previousState => !previousState);
    onChange(v);
  };

  return (
    <Switch
      trackColor={{false: '#e8e8e8', true: '#e8e8e8'}}
      thumbColor={isEnabled ? '#45d53a' : '#e3e3e3'}
      ios_backgroundColor="#e8e8e8"
      onValueChange={toggleSwitch}
      value={isEnabled}
      disabled={disabled}
    />
  );
};

export default SwitchC;
