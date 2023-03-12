import { Api, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create the HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /notes": "functions/list.handler",
      "GET /notes/{id}": "functions/get.handler",
      "PUT /notes/{id}": "functions/update.handler",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}