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

interface FormScreenProps {}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Password is required!'),
});

const FormScreen = (props: FormScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.COLOR_OFF_WHITE,
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
          borderBottomRightRadius={60}
          borderBottomLeftRadius={60}
        />
      </View>
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        scrollEnabled={true}
        extraScrollHeight={0}
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        style={{
          backgroundColor: Colors.COLOR_OFF_WHITE,
          width: '100%',
          paddingHorizontal: 20,
          height: ScreenDimensions.WINDOW_HEIGHT / 1.7,
          position: 'absolute',
          bottom: 0,
          paddingTop: 60,
        }}
        keyboardShouldPersistTaps="handled">
        <View
          >
          <View style={{marginBottom: 30}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 36,
                marginBottom: 10,
                color: Colors.COLOR_PRIMARY_GREEN,
              }}>
              Welcome back
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                fontSize: 18,
                color: Colors.TEXT_GRAY,
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
                  <View>
                    <FormInput
                      handleChange={handleChange('email')}
                      handleBlur={handleBlur('email')}
                      value={values.email}
                      placeholder = 'Email'
                    />
                    <InputValidationCircle
                      error={errors.email}
                      touched={touched.email}
                    />
                    <View style={{position: 'absolute', top: 9, left: 10}}>
                      <Icon
                        name="person"
                        size={30}
                        color={Colors.COLOR_PRIMARY_GREEN}
                      />
                    </View>
                  </View>
                  <View>
                    <FormInput
                      handleChange={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      value={values.password}
                      secureEntry={true}
                      placeholder = 'Password'
                      noCapitalize={true}
                    />

                    <InputValidationCircle
                      error={errors.password}
                      touched={touched.password}
                    />
                    <View style={{position: 'absolute', top: 10, left: 10}}>
                      <Icon
                        name="lock"
                        size={28}
                        color={Colors.COLOR_PRIMARY_GREEN}
                      />
                    </View>
                  </View>

                  <CustomButton
                    title="Login"
                    onPress={() => console.log('Login')}
                    disabled={Object.keys(errors).length > 0}
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
