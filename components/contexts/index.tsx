import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react";
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

const Context = createContext<(State & { dispatch: Dispatch<Action> }) | undefined>(undefined);

export const Provider = (props: PropsWithChildren) => {
    const [{ subscriptions }, dispatch] = useReducer(reducer, { subscriptions: [] });

    return <Context.Provider value={{ subscriptions, dispatch }}>{props.children}</Context.Provider>;
};

export const useSubscriptions = () => {
    const context = useContext(Context);
    if (context === undefined) throw new Error("useSubscriptions must be used within Provider");

    return context.subscriptions;
};

export const useAddSubscription = () => {
    const context = useContext(Context);
    if (context === undefined) throw new Error("useProvider must be used within Provider");

    const add = (subscription: Subscription) => context.dispatch({ type: 'add', subscription })
    return add;
};
