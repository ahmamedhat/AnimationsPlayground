import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors, ScreenDimensions} from '../../infrastructure/constants';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import InputValidationCircle from '../../components/InputValidationCircle';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { Theme } from '../../infrastructure/theme';


interface FormScreenProps {}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(50, 'Password is too long!')
    .required('Password is required!'),
});

const FormScreen = (props: FormScreenProps) => {

  const theme = useTheme() as Theme

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.COLOR_OFF_WHITE,
      }}>
      <View
        style={{
          width: ScreenDimensions.WINDOW_WIDTH,
          maxHeight: ScreenDimensions.WINDOW_HEIGHT / 2.5,
        }}>
        <Image
          source={require('../../assets/images/green-plants.jpg')}
          style={{width: '100%', height: '100%'}}
          resizeMode={'cover'}
          borderBottomRightRadius={20}
          borderBottomLeftRadius={20}
        />
      </View>
      <View
        style={{
          backgroundColor: theme.colors.COLOR_SECONDARY_GREEN,
          position: 'absolute',
          top: 365,
          width: ScreenDimensions.WINDOW_WIDTH - 40,
          height: 100,
          borderRadius: 10
        }}
      />

      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        scrollEnabled={true}
        extraScrollHeight={0}
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        style={{
          backgroundColor: theme.colors.COLOR_OFF_WHITE,
          width: '100%',
          paddingHorizontal: 20,
          height: ScreenDimensions.WINDOW_HEIGHT / 1.7,
          position: 'absolute',
          bottom: 0,
          paddingTop: 60,
        }}
        keyboardShouldPersistTaps="handled">
        <View>
          <View style={{marginBottom: 30}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 36,
                marginBottom: 10,
                color: theme.colors.COLOR_PRIMARY_GREEN,
              }}>
              Welcome back
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                fontSize: 18,
                color: theme.colors.TEXT_GRAY,
              }}>
              Login to your account
            </Text>
          </View>

          <View
            style={{
              width: '100%',
            }}>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={values => console.log(values)}
              validationSchema={LoginSchema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={{width: '100%', paddingBottom: 50}}>
                  <View style={{marginBottom: 15}}>
                    <FormInput
                      handleChange={handleChange('email')}
                      handleBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Email"
                    />
                    <InputValidationCircle
                      error={errors.email}
                      touched={touched.email}
                      value = {values.email}

                    />
                    <View style={{position: 'absolute', top: 9, left: 10}}>
                      <Icon
                        name="person"
                        size={30}
                        color={theme.colors.COLOR_PRIMARY_GREEN}
                      />
                    </View>
                    {(errors.email && touched.email) && (
                      <Text style={{color: theme.colors.COLOR_DANGER, marginTop: 5}}>
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View style={{marginBottom: 15}}>
                    <FormInput
                      handleChange={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      value={values.password}
                      secureEntry={true}
                      placeholder="Password"
                      noCapitalize={true}
                    />

                    <InputValidationCircle
                      error={errors.password}
                      touched={touched.password}
                      value = {values.password}
                    />
                    <View style={{position: 'absolute', top: 10, left: 10}}>
                      <Icon
                        name="lock"
                        size={28}
                        color={theme.colors.COLOR_PRIMARY_GREEN}
                      />
                    </View>
                    {errors.password && touched.password && (
                      <Text style={{color: theme.colors.COLOR_DANGER, marginTop: 5}}>
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  <CustomButton
                    title="Login"
                    onPress={() => console.log('Login')}
                    disabled={(Object.keys(errors).length > 0 || values.email.trim() == '' || values.email.trim() == '')}
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FormScreen;
