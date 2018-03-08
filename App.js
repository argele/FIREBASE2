import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import firebase from './firebase';

export default class App extends React.Component {
constructor (props){
  super(props);
    database= firebase.database();
    items=[];
    this.state ={
      Nombre:'',
      Galeria:'',
      Email: '',
      Direccion: '',
      Cierre: '',
      Apertura:'',
      Descripcion:'',
      Telefono:'',
  dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
};

}

componentWillMount(){
  database.ref('messages').on('value' ,(snap) => {
      snap.forEach((data) => {
        items.push({
          key: data.key,
          data: data.val(),

        });

      })
      this.setState({dataSource:this.state.dataSource.cloneWithRows(items)});
  });
}

renderRow(data){
  return(
    <View>
      <Text> Key: {data.key}</Text>
      <Text> Key:{data.data.Nombre}</Text>
      <Text> Key:{data.data.Galeria}</Text>
      <Text> Key:{data.data.Email}</Text>
      <Text> Key:{data.data.Direccion}</Text>
      <Text> Key:{data.data.Cierre}</Text>
      <Text> Key:{data.data.Apertura}</Text>
      <Text> Key:{data.data.Descripcion}</Text>
      <Text> Key:{data.data.Telefono}</Text>
<View style={{height:2, backgroundColor:'gray'}} />
      </View>
  )
}

  render() {
    return (
      <View style={{flex: 1}}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)} />
      

      </View>
    );
  }
}


