import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRemoveSubscription, useSubscriptions } from '@/components/contexts';
import { Link } from 'expo-router';

export default () => {
    const subscriptions = useSubscriptions();
    const remove = useRemoveSubscription();
    return (
        <View style={styles.container}>
            <Text>Subscriptions</Text>
            <ScrollView>
                {
                    subscriptions.map((subscription) =>
                        <View key={subscription.id}>
                            <Text>{subscription.name}</Text>
                            <Text>{subscription.cost}</Text>
                            <Text>{subscription.currency}</Text>
                            <Text>{subscription.startDate.toLocaleDateString()}</Text>
                            <Text>{subscription.everyWeeks}</Text>
                            <Text>{subscription.notes}</Text>
                            <Link href={{
                                pathname: "/(tabs)/(dashboard)/[subscriptionId]",
                                params: { subscriptionId: subscription.id }
                            }} >
                                <FontAwesome size={28} name='pencil-square-o' />
                            </Link>

                            <Button title='Remove' onPress={() => remove(subscription.id)} />
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
