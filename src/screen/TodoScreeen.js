import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import { IconButton } from 'react-native-paper';
import FallBack from './components/FallBack';



const TodoScreen = () => {
    // Initialize local state for todo
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);


    const handleAddTodo = () => {

    //Handle Add Todo
    if (todo === ""){
        return;
    }

        setTodoList([...todoList,{id: Date.now().toString(),
                                 title:todo}]);
        setTodo("");
    };

    //Handle Delete Todo
    const handleDeleteTodo =(id) =>{

        const updatedTodoList = todoList.filter(todo => todo.id !== id)

        setTodoList(updatedTodoList);
    };

    //Handle Edit Todo
    const handleEditTodo =(todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
    };

    //Handle Update Todo

    const handleUpdateTodo =() => {
        const updatedTodos = todoList.map((item)=>{
            if(item.id === editedTodo.id){
                return {...item,title:todo}
            }
            return item
        });
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
    };


    const renderTodos = ({ item, index }) => {
        // Render todo
        return (

            <View style={styles.viewcomponent}>
                
                <Text style={styles.todoViewItemText}>{item.title}</Text>
                <IconButton 
                    icon="pencil"
                    color="#ffffff"
                    onPress={() => handleEditTodo(item)}/>
                <IconButton 
                    icon="trash-can" 
                    color="#ffffff" 
                    onPress={() => handleDeleteTodo(item.id)}/>
                  
            </View>
        );
    };

    return (
        <View style={{ marginHorizontal: 16, marginTop: 40, height:720}}>
            <Text style={styles.topic} >To-Do List</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Add a Task!'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {editedTodo ?             <TouchableOpacity 
            style={styles.touchableOpacity}
            onPress={()=> handleUpdateTodo()}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity> :            <TouchableOpacity 
            style={styles.touchableOpacity}
            onPress={()=> handleAddTodo()}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
            
            }

            {/* Render todo List */}
            <FlatList 
            style={styles.flatlist}
            data={todoList} 
            renderItem={renderTodos} 
            keyExtractor={(item) => item.id} />
            {
                todoList.length <=0 && <FallBack />
            }
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    topic:{
        marginTop:10,
        fontSize: 34,
        textAlign: 'center',
        fontWeight: '800',
        color:"#0f50d4"
    },
    textInput: {
        fontSize: 18,
        height:60,
        marginTop: 10,
        borderWidth: 3,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    touchableOpacity: {
        backgroundColor: "#000",
        borderRadius: 6,
        marginVertical: 24,
        paddingVertical: 12,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,

    },
    viewcomponent: {
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 8,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset:{width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation:5 ,
    },
    todoViewItemText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        flex: 1,
        marginLeft: 10,
    },

});
