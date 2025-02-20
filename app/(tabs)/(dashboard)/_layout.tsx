import React from "react";
import { Stack } from "expo-router";

export default () => {

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Dashboard" }} />
            <Stack.Screen name="[subscriptionId]" options={{ title: "Edit subscription" }} />
        </Stack>
    );
};
