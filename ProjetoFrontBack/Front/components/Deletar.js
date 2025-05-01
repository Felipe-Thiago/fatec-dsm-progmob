import React, { useState } from 'react';
import { View, Button } from 'react-native';

const DeletarDado = (props) => {
    const [campos, setCampos] = useState([]);

    const Deletar = async (id) => {
        try{
            await fetch(`http://localhost:3000/delete/${id}`, {
                method: 'DELETE',
            }).then((res)=> res.json())
            .then((json) => {console.log(json); fetchDados()})
        } catch(error){
            console.error("Erro ao deletar: ", error)
        }
    }

      const fetchDados = () => {
        try{
            fetch(`http://localhost:3000/`).then(
                (res) => {return res.json()}
              ).then(
                (json) => {
                  console.log(json)
                  setCampos(json);
                }
            )
        } catch(error){
            console.error("Erro ao deletar dados: ", error)
        }
        
      }
    return(
        <View>
            <Button title="excluir" onPress={() => {Deletar(props.id)}} />
        </View>
    )
}

export default DeletarDado;