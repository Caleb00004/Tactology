import { SearchIcon } from "@/assets/nav-icons";
import React, { FC } from "react";
import { TextInput, TextInputProps, View, ViewStyle } from "react-native";

const Search: FC<TextInputProps & { containerStyle?: ViewStyle }> = ({
  placeholder,
  containerStyle,
  ...props
}) => {
  return (
    <View
      style={[
        {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        containerStyle,
      ]}
    >
      <View style={{ width: "100%", position: "relative", }}>
        <SearchIcon
          style={{
            left: 15,
            top: 15,
            zIndex: 20,
            position: "absolute",
          }}
        />
        <TextInput
          selectionColor="black"
          placeholder={placeholder ? placeholder : "Search"}
          placeholderTextColor="#ADADAD"
          {...props}
          style={[
            {
              height: 50,
              fontSize: 12,
              width: "100%",
              borderWidth: 1,
              paddingLeft: 40,
              borderRadius: 24,
              borderColor: "#E8F3F1",
              backgroundColor: "white",
              fontFamily: "OpenSans_400Regular",
            },
            [props.style],
          ]}
        />
      </View>
    </View>
  );
};

export default Search;
