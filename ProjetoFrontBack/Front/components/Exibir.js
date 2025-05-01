import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import DeletarDado from './Deletar';
import EditarDado from './Editar';
import { List } from 'react-native-paper';


const ExibirDado = (props)=> {
    return (
        <View>
            <FlatList 
                data={props.campo}
                renderItem={({item}) => {
                    return(
                    <View style={{
                        margin: 20,
                        backgroundColor: "#",
                        padding: 5,
                        border: '1px solid #ddd' 
                        }}>
                            <List.Accordion title={item.name + ' ' + item.surname}>
                                <List.Item title={`Id: ${item._id}`} />
                                <List.Item title={`Nome: ${item.name}`}/>
                                <List.Item title={`Sobrenome: ${item.surname}`}/>
                                <List.Item title={`Sexo: ${item.gender}`}/>
                                
                                <EditarDado id={item._id}/>
                            </List.Accordion>
                            <DeletarDado id={item._id}/>
                        
                    </View>
                    )
                }}
            
            />
        </View>
    )
           
}           

export default ExibirDado;