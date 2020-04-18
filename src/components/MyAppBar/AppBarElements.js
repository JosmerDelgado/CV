import React from "react";
import AppBarButton from "./AppBarButton";
import AppBarAvatar from "./AppBarAvatar";

export default function AppBarElements(props) {
  const { modeledButton, OnClickMenuButton } = props;
  return (
    <>
      {modeledButton.map((value, key) => (
        <React.Fragment key={key}>
          <AppBarButton
            key={key}
            value={value}
            OnClickMenuButton={OnClickMenuButton}
          />
          {parseInt(modeledButton.length / 2) - 1 === key ? (
            <AppBarAvatar />
          ) : null}
        </React.Fragment>
      ))}
    </>
  );
}
