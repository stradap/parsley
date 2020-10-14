import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import {InputItem} from '@ant-design/react-native';
import {SimpleSurvey} from 'react-native-simple-survey';
import {COLORS} from '../assets/validColors';
import {survey} from '../assets/enum';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

export default function SurveyScreen({onAnswerComplete}) {
  const [answersSoFar, setAnswersSoFar] = React.useState();
  let surveyRef = null;

  const onSurveyFinished = (answers) => {
    /**
     *  By using the spread operator, array entries with no values, such as info questions, are removed.
     *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
     *  to the rest of your code, can be done.
     *
     *  Answers are returned in an array, of the form
     *  [
     *  {questionId: string, value: any},
     *  {questionId: string, value: any},
     *  ...
     *  ]
     *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
     *  to you.
     *
     *  As an example
     *  {
     *      questionId: "favoritePet",
     *      value: {
     *          optionText: "Dogs",
     *          value: "dog"
     *      }
     *  }
     *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
     *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
     */

    const infoQuestionsRemoved = [...answers];

    // Convert from an array to a proper object. This won't work if you have duplicate questionIds
    const answersAsObj = {};
    for (const elem of infoQuestionsRemoved) {
      answersAsObj[elem.questionId] = elem.value;
    }

    console.log(answersAsObj);

    onAnswerComplete(answersAsObj);
    // this.props.navigation.navigate('SurveyCompleted', {
    //   surveyAnswers: answersAsObj,
    // });
  };

  /**
   *  After each answer is submitted this function is called. Here you can take additional steps in response to the
   *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
   *  is restricted (age, geo-fencing) from your app.
   */
  const onAnswerSubmitted = (answer) => {
    setAnswersSoFar(JSON.stringify(surveyRef.getAnswers(), 2));
    switch (answer.questionId) {
      case 'favoriteColor': {
        if (COLORS.includes(answer.value.toLowerCase())) {
          // this.setState({backgroundColor: answer.value.toLowerCase()});
        }
        break;
      }
      default:
        break;
    }
  };
  const renderPreviousButton = (onPress, enabled) => {
    return (
      <View style={styles.button}>
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Previous'}
        />
      </View>
    );
  };

  const renderNextButton = (onPress, enabled) => {
    return (
      <View style={styles.button}>
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Next'}
        />
      </View>
    );
  };

  const renderFinishedButton = (onPress, enabled) => {
    return (
      <View style={styles.finishBtn}>
        <Button
          title={'Finished'}
          onPress={onPress}
          disabled={!enabled}
          color={GREEN}
        />
      </View>
    );
  };

  const renderButton = (data, index, isSelected, onPress) => {
    return (
      <View key={`selection_button_view_${index}`} style={styles.buttonStyle}>
        <Button
          title={data.optionText}
          onPress={onPress}
          color={isSelected ? GREEN : PURPLE}
          style={isSelected ? {fontWeight: 'bold'} : {}}
          key={`button_${index}`}
        />
      </View>
    );
  };

  const renderQuestionText = (questionText) => {
    return (
      <View style={styles.margin10}>
        <Text numLines={1} style={styles.questionText}>
          {questionText}
        </Text>
      </View>
    );
  };

  const renderTextBox = (onChange, value, placeholder, onBlur) => {
    return (
      <View>
        <InputItem
          style={styles.textBox}
          onChangeText={(text) => onChange(text)}
          numberOfLines={1}
          underlineColorAndroid={'white'}
          placeholder={placeholder}
          placeholderTextColor={'rgba(184,184,184,1)'}
          value={value}
          multiline
          onBlur={onBlur}
          blurOnSubmit
          returnKeyType="done"
        />
      </View>
    );
  };

  const renderNumericInput = (onChange, value, placeholder, onBlur) => {
    return (
      <TextInput
        style={styles.numericInput}
        onChangeText={(text) => {
          onChange(text);
        }}
        underlineColorAndroid={'white'}
        placeholderTextColor={'rgba(184,184,184,1)'}
        value={String(value)}
        placeholder={placeholder}
        keyboardType={'numeric'}
        onBlur={onBlur}
        maxLength={3}
      />
    );
  };

  const renderInfoText = (infoText) => {
    return (
      <View style={styles.margin10}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.background,
        // {backgroundColor: this.state.backgroundColor},
      ]}>
      <View style={styles.container}>
        <SimpleSurvey
          ref={(s) => {
            surveyRef = s;
          }}
          survey={survey}
          renderSelector={renderButton.bind(this)}
          containerStyle={styles.surveyContainer}
          selectionGroupContainerStyle={styles.selectionGroupContainer}
          navButtonContainerStyle={styles.navButtonContainerStyle}
          renderPrevious={renderPreviousButton}
          renderNext={renderNextButton}
          renderFinished={renderFinishedButton}
          renderQuestionText={renderQuestionText}
          onSurveyFinished={(answers) => onSurveyFinished(answers)}
          onAnswerSubmitted={(answer) => onAnswerSubmitted(answer)}
          renderTextInput={renderTextBox}
          renderNumericInput={renderNumericInput}
          renderInfo={renderInfoText}
        />
      </View>

      <ScrollView style={styles.answersContainer}>
        <Text style={styles.centerText}>JSON output</Text>
        <Text>{answersSoFar}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    maxWidth: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  finishBtn: {
    flexGrow: 1,
    maxWidth: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'flex-start',
  },
  margin10: {
    marginLeft: 10,
    marginRight: 10,
  },
  centerText: {
    textAlign: 'center',
  },
  navButtonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',

    elevation: 20,
    borderRadius: 10,
    flex: 1,
  },
  answersContainer: {
    width: '90%',
    maxHeight: '20%',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 10,
  },
  surveyContainer: {
    width: 'auto',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: 'center',
    padding: 5,
    flexGrow: 0,
  },
  selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end',
  },
  background: {
    flex: 1,
    minHeight: 800,
    maxHeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,

    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
  },
});
