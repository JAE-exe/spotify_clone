import { Subscription, UserDetails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextType = {
  access_token: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export interface Props {
  children: ReactNode;
}

export const MyUserContextProvider = ({ children }: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    const fetchUserDetailsAndSubscription = async () => {
      if (user) {
        setIsLoadingData(true);
        try {
          const { data: userDetails, error: userDetailsError } = await getUserDetails();
          const { data: subscription, error: subscriptionError } = await getSubscription();

          if (userDetailsError || subscriptionError) {
            console.error('Error fetching user details or subscription', userDetailsError, subscriptionError);
          } else {
            setUserDetails(userDetails);
            setSubscription(subscription);
          }
        } catch (error) {
          console.error('Error fetching data', error);
        } finally {
          setIsLoadingData(false);
        }
      }
    };

    fetchUserDetailsAndSubscription();
  }, [user]);

  const getUserDetails = () => supabase.from('users').select('*').single();

  const getSubscription = () =>
    supabase.from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .single();

  const value = {
    access_token: accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
