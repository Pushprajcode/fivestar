import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

export default function DobModal(props: any) {
  const [date, setDate] = useState(new Date());
 // const [open, setOpen] = useState(false);
  const {visible} = props;

  return (
    <View>
      <DatePicker
        modal
        open={visible}
        date={date}
        mode="date"
        onConfirm={date => {
          //setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
         // setOpen(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
