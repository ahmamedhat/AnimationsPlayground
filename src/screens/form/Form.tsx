import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {Colors} from '../../infrastructure/constants';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import InputValidationCircle from '../../components/InputValidationCircle';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';

interface FormScreenProps {}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const FormScreen = (props: FormScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.COLOR_FOURTH,
        paddingHorizontal: 20,
      }}>
      <View style={{height: 100}}>
        <Text style = {{}}>SignUp</Text>
      </View>
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
          <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            scrollEnabled={true}
            extraScrollHeight={0}
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            style={{width: '100%'}}
            keyboardShouldPersistTaps="handled">
            <View style={{width: '100%'}}>
              <View>
                <FormInput
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  value={values.email}
                />
                <InputValidationCircle
                  error={errors.email}
                  touched={touched.email}
                />
              </View>
              <View>
                <FormInput
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  value={values.password}
                  secureEntry={true}
                  noCapitalize={true}
                />

                <InputValidationCircle
                  error={errors.password}
                  touched={touched.password}
                />
              </View>

              <CustomButton
                title="Login"
                onPress={() => console.log('Login')}
                disabled = {Object.keys(errors).length > 0}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default FormScreen;
