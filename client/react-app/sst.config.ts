import { SSTConfig } from "sst";
import { StaticSiteStack } from "./stacks/StaticSiteStack";

export default {
  config(_input) {
    return {
      name: "react-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StaticSiteStack);
  }
} satisfies SSTConfig;
