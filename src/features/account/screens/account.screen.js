import React from "react";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
} from "../components/account.styles";
import { AccountContainer } from "../components/account.styles";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.components";
import { AnimationWrapper } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/welcome.json")}
        />
      </AnimationWrapper>

      <AccountCover />
      <AccountContainer>
        <Text>Account Screen</Text>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
