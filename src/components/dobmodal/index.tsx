import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export default function DobModal(props: any) {
  const {visible, crossPress, callback: any} = props;
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date');
  console.log('chooseDate==>', chooseDate);
  console.log(';nfkjnkfk!!!!!', props.callback(chooseDate));

  return (
    <View>
      <TouchableOpacity onPress={crossPress}>
        <DatePicker
          modal={visible}
          date={date ? new Date(date) : moment('2000-01-01').toDate()}
          maximumDate={moment(new Date()).subtract(13, 'years').toDate()}
          minimumDate={moment(new Date()).subtract(200, 'years').toDate()}
          open={visible}
          mode="date"
          onConfirm={(date: any) => {
            setDate(date);
            setChooseDate(
              [
                date.getMonth() + 1,
                '/',
                date.getDate(),
                '/',
                date.getFullYear(),
              ].join(''),
            );
          }}
          onCancel={() => {}}
        />
      </TouchableOpacity>
    </View>
  );
}
