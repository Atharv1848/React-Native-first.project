import { StyleSheet, Text, View } from 'react-native';
import {useState,useEffect} from "react";
import axios from "axios";
import { Button} from 'react-native-paper';
import DataTable from "./DataTable"

export default function TablePaginationAxios({ navigation }) {

  const [users ,setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUsers(res.data)
    })
  })

    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('Conference')}
          style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Go to Conference</Text>
        </Button>
        
        {users && users.length > 0 ? <DataTable users={users} /> : <Text>Loading Data ..... </Text>}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });