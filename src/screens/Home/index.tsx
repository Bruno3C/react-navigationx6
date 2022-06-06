import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  Container,
} from './styles';

export function Home(){
  const navigation = useNavigation();
  function handleDetails() {
    navigation.navigate('Details', { name: 'Bruno'});
  }
  
  return (
    <Container>
      
      <TouchableWithoutFeedback
        onPress={handleDetails}
      >
        <Text style={{ color: '#2c37cc', fontSize: 30 }}>Ir para detalhes</Text>
      </TouchableWithoutFeedback>
    </Container>
  );
}