import { StackContext, StaticSite } from "sst/constructs";

export function StaticSiteStack({ stack }: StackContext) {
  const site = new StaticSite(stack, "ReactStaticSite", {
    path: "packages/rx",
    buildCommand: "npm run build",
    buildOutput: "build",
    environment: {
      REACT_APP_API_URL: process.env.API_URL!,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}