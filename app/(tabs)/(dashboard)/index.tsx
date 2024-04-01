import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useSubscriptions } from '@/components/contexts';
import { SubscriptionView } from '@/components/subscriptions';

export default () => {
    const subscriptions = useSubscriptions();
    return (
        <View style={styles.container}>
            <Text>Subscriptions</Text>
            <ScrollView>
                {subscriptions.map((subscription) => <SubscriptionView subscription={subscription} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
