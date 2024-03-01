import React, { useEffect, useState } from "react";
// import { AuthButton } from "../../account/components/account.styles";
import { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  align-item: center;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsList = styled(List.Section)`
  background-color: rgba(255, 255, 255, 0.7);
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/account-back.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
`;

export const SettingsScreen = ({ navigation }) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };
  useEffect(() => {
    getProfilePicture();
  }, [user]);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon style={180} icon="human" backgroundColor="tomato" />
            )}
            {photo && (
              <Avatar.Image
                size={200}
                source={{ uri: photo }}
                backgroundColor="tomato"
              />
            )}
            <Text variant="label">{user.email}</Text>
          </TouchableOpacity>
        </AvatarContainer>
        <SettingsList>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="tomato" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color="tomato" icon="door" />
            )}
            onPress={onLogout}
          />
        </SettingsList>
        {/* <AuthButton onPress={() => onLogout()}>LogOut</AuthButton> */}
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
