import {
  View,
  Text,
  TextInput,
  Button,
  Checkbox,
  TouchableOpacity,
} from 'react-native';
import {useState, React} from 'react';
import {Formik} from 'formik';

const LoginScreen = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <View>
              <View>
                <Checkbox value={isSelected} />
                <Text>Remember me</Text>
              </View>
              <TouchableOpacity>
                <Text>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
