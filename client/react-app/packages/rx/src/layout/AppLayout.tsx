import React from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const AppLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div style={{
        padding: "2em",
    }}>
      <Menu fixed="top" inverted>
        <Menu.Item header>OURS APP</Menu.Item>
      </Menu>

      <div style={{ marginTop: "4em" }}>{children}</div>
    </div>
  );
};

export default AppLayout;
