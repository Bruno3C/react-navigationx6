import React from 'react';
import { Text } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.stack.routes';

import {
  Container
} from './styles';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>

export function Details({ route }: ScreenProps){
  const name = route.params.name;
  return (
    <Container>
      <Text style={{ color: '#2c37cc', fontSize: 30 }}>{name}</Text>
    </Container>
  );
}