import React from 'react';
import { View, Text, FlatList } from 'react-native';
import DeletarDado from './Deletar';

const ExibirDado = (props)=> {
    return (
        <View>
            <FlatList 
                data={props.campo}
                renderItem={({item}) => {
                    return(
                    <View style={{
                        margin: 20,
                        backgroundColor: "#00ff00",
                        padding: 5,
                        border: '1px solid #ddd' 
                        }}>
                        <Text>Id: {item._id}</Text>
                        <Text>Nome: {item.name}</Text>
                        <DeletarDado id={item._id}/>
                    </View>
                    )
                }}
            
            />
        </View>
    )       
}           

export default ExibirDado;