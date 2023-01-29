/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NavigationBar, Footer, AppContent } from "@axao/components";

function withLayout(WrappedComponent: () => JSX.Element) {
  function Layout(props: any) {
    return (
      <>
        <NavigationBar />
        <AppContent>
          <WrappedComponent {...props} />
        </AppContent>
        <Footer />
      </>
    );
  }
  Layout.displayName = "Layout";
  return Layout;
}

export default withLayout;
