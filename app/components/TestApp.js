import { Text, View } from "react-native";
import { forwardRef, useImperativeHandle } from "react";
import { SafeAreaView } from "react-native";

const MyApp = forwardRef(function (props, ref) {

    const fn1 = () => {
        // console.log('fn1');
        return 'I am fn1'
    }
    const fn2 = () => {
        // console.log('fn2');
        return 'I am fn2'
    }

    useImperativeHandle(ref, () => ({
        fn1,
        fn2
    }));
    return (

    <SafeAreaView>
        <Text>My Component</Text>
        <Text>{fn1()}</Text>
        <Text>{fn2()}</Text>
    </SafeAreaView>
    )
});

export default MyApp;