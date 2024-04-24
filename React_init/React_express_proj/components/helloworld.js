import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => { // Destructure navigation from props

    return (
        <View>
            <Text>Home</Text>
            <Button
                title="Go to Product page"
                onPress={() =>
                    navigation.navigate('Product')
                }
            />
        </View>
    );
};

export default Home;
