import React from 'react';
import {Text, View, StyleSheet, AsyncStorage, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {
  Button,
  Card,
  WhiteSpace,
  Accordion,
  Checkbox,
} from '@ant-design/react-native';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import SimpleSurvey from 'react-native-simple-survey';
import BasicForm from './BasicForm';
import Survey from './Survey';

import {_retrieveData} from '../utils/utils';

import conditions from '../assets/conditions';
import {terms, survey} from '../assets/enum';
const items = conditions;

const AgreeItem = Checkbox.AgreeItem;

export default function Register({route, navigation}) {
  const [basicForm, setBasicForm] = React.useState({});
  const [surveyAnswers, setSurveyAnswers] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [errorForm, setErrorForm] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [activeSections, setActiveSections] = React.useState([]);
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  const onSubmit = () => {
    const dataAPI = {
      ...basicForm,
      ...surveyAnswers,
      ...selectedItems,
      ...agreeTerms,
    };
    console.log(dataAPI);
  };

  const onNextStepOne = async () => {};

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <ProgressSteps activeStep={activeStep}>
            <ProgressStep
              errors={errorForm}
              label="Basic information & Address"
              onNext={onNextStepOne}>
              <BasicForm
                basicForm={basicForm}
                _getValues={(form) => {
                  // review this part, awful hack but works to keep the reference.
                  setBasicForm(form);
                }}
              />
            </ProgressStep>
            <ProgressStep label="Medical conditions">
              <View>
                <SectionedMultiSelect
                  items={items}
                  IconRenderer={Icon}
                  uniqueKey="id"
                  subKey="children"
                  selectText="Please choose medical conditions that you present"
                  showDropDowns={true}
                  readOnlyHeadings={true}
                  onSelectedItemsChange={(selectedItemsValues) => {
                    setSelectedItems(selectedItemsValues);
                  }}
                  selectedItems={selectedItems}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Questions"
              nextBtnDisabled={true}
              nextBtnText="">
              <View>
                <Survey
                  onAnswerComplete={(answersSoFar) => {
                    setSurveyAnswers(answersSoFar);
                    setActiveStep(3);
                  }}
                />
              </View>
            </ProgressStep>
            <ProgressStep label="Review" onPrevious={() => setActiveStep(2)}>
              <Card>
                <Card.Header title="Basic Information & Address" />
                <Card.Body>
                  <View style={styles.container}>
                    <Text>First Name: {basicForm.firstName}</Text>
                    <Text>Last Name: {basicForm.lastName}</Text>
                    <Text>Date Of Birthdate: {basicForm.firstName}</Text>

                    <Text>Email: {basicForm.email}</Text>
                    <Text>Street Address: {basicForm.phoneNumber}</Text>
                    <Text>City: {basicForm.firstName}</Text>
                    <Text>State: {basicForm.firstName}</Text>
                    <Text>Zip: {basicForm.firstName}</Text>
                  </View>
                </Card.Body>
              </Card>
              <WhiteSpace size="md" />
              <Card>
                <Card.Header title="Medical Conditions" />
                <Card.Body>
                  <View style={styles.container}>
                    {selectedItems.map((ele) => {
                      return <Text key={ele}>{ele}</Text>;
                    })}
                  </View>
                </Card.Body>
              </Card>
              <WhiteSpace size="md" />
              <Card>
                <Card.Header title="Medical Conditions" />
                <Card.Body>
                  <View style={styles.container}>
                    <Text>
                      Smoke Tobacco: {surveyAnswers.SmokeTobacco?.optionText}
                    </Text>
                    <Text>
                      Drink Alcohol: {surveyAnswers.DrinkAlcohol?.optionText}
                    </Text>
                    <Text>
                      Illicit Drugs: {surveyAnswers.IllicitDrugs?.optionText}
                    </Text>
                    <Text>
                      Current Surgeries: {surveyAnswers.CurrentSurgeries}
                    </Text>
                    <Text>
                      Current Medications: {surveyAnswers.CurrentMedications}
                    </Text>
                  </View>
                </Card.Body>
              </Card>
            </ProgressStep>
            <ProgressStep
              label="Accept terms"
              finishBtnText="Review"
              onSubmit={onSubmit}
              nextBtnDisabled={!agreeTerms}>
              <View>
                <Accordion
                  onChange={(activeSection) => setActiveSections(activeSection)}
                  activeSections={activeSections}>
                  <Accordion.Panel header="Terms">
                    <Card>
                      <Card.Body>
                        <View style={styles.container}>
                          <Text style={{marginHorizontal: 10}}>{terms}</Text>
                        </View>
                      </Card.Body>
                    </Card>
                  </Accordion.Panel>
                </Accordion>
                <WhiteSpace size="xl" />
                <AgreeItem
                  checked={agreeTerms}
                  onChange={(event) => {
                    setAgreeTerms(event.target.checked);
                  }}>
                  Are you agree with the terms?
                </AgreeItem>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
