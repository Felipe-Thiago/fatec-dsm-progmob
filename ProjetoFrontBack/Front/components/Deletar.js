import React from 'react';
import { View, Pressable, Text } from 'react-native';

const DeletarDado = (props) => {
    const Deletar = async (id) => {
        await fetch(`http://localhost:3000/delete/${id}`, {
          method: 'DELETE',
        }).then((res)=> res.json())
        .then((json) => console.log(json))
      }
    return(
        <View style={{
            border: '1px solid black', 
            margin: 5,
            padding: 5
            }}>
            <Pressable onPress={() => {Deletar(props.id)}}>
                <Text>Excluir</Text>
            </Pressable>
        </View>
    )
}

export default DeletarDado;