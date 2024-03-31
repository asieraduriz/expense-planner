import { createContext, PropsWithChildren, useContext } from "react";
import { Subscription } from "@/types";

type State = {
    subscriptions: Subscription[];
};

type Action = {
    type: "add";
    subscription?: Subscription;
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "add": {
            if (!action.subscription) {
                console.warn("No subscription passed");
                return state;
            }

            const subscriptions = Array.from(state.subscriptions);
            subscriptions.push(action.subscription);

            return { ...state, subscriptions };
        }
    }
};

const Context = createContext<(State & {}) | undefined>(undefined);

export const Provider = (props: PropsWithChildren) => {
    return <Context.Provider value={{ subscriptions: [] }}>{props.children}</Context.Provider>;
};

export const useProvider = () => {
    const context = useContext(Context);
    if (context === undefined) throw new Error("usProvider must be used within Provider");

    return context;
};
