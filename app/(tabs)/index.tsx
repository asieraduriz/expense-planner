import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useSubscriptions } from '@/components/contexts';

export default () => {
  const subscriptions = useSubscriptions();
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
    alignItems: 'center',
    justifyContent: 'center',
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
