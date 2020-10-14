import React, {useEffect} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {
  InputItem,
  DatePicker,
  List,
  WhiteSpace,
} from '@ant-design/react-native';
import {useForm, Controller} from 'react-hook-form';

export default function BasicForm({basicForm, _getValues}) {
  const {control, errors, getValues} = useForm({
    defaultValues: basicForm,
  });

  useEffect(() => {
    return function cleanup() {
      _getValues(getValues());
    };
  }, []); // Best practice is to set a dependency.

  return (
    <View style={styles.viewContainer}>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            error={errors.firstName}
            onBlur={onBlur}
            onChangeText={(firstName) => onChange(firstName)}
            value={value}
            placeholder="First Name"
          />
        )}
        name="firstName"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.name && <Text>First name is required</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            // error
            onBlur={onBlur}
            onChangeText={(lastName) => onChange(lastName)}
            value={value}
            placeholder="Last Name"
          />
        )}
        name="lastName"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <View>
            <List>
              <DatePicker
                mode="date"
                value={value}
                defaultDate={value || new Date()}
                onChange={(dateBirth) => onChange(dateBirth)}>
                <List.Item arrow="horizontal">Date of Birthdate</List.Item>
              </DatePicker>
            </List>
          </View>
        )}
        name="dateBirth"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            onBlur={onBlur}
            onChangeText={(email) => onChange(email)}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            onBlur={onBlur}
            onChangeText={(phoneNumber) => onChange(phoneNumber)}
            value={value}
            placeholder="Phone Number"
          />
        )}
        name="phoneNumber"
        defaultValue=""
      />
      <WhiteSpace size="xl" />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            onBlur={onBlur}
            onChangeText={(streetAddress) => onChange(streetAddress)}
            value={value}
            placeholder="Street Address"
          />
        )}
        name="streetAddress"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            onBlur={onBlur}
            onChangeText={(city) => onChange(city)}
            value={value}
            placeholder="City"
          />
        )}
        name="city"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            onBlur={onBlur}
            onChangeText={(state) => onChange(state)}
            value={value}
            placeholder="State"
          />
        )}
        name="state"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <InputItem
            clear
            onBlur={onBlur}
            onChangeText={(zip) => onChange(zip)}
            value={value}
            placeholder="Zip"
          />
        )}
        name="zip"
        defaultValue=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1, justifyContent: 'center', padding: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
});
