import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { dynamoClient } from "src/lib/dynamoClient";

export async function handler(event: APIGatewayProxyEventV2) {
  const { productId } = event.pathParameters;

  const command = new DeleteCommand({
    TableName: "ProductsTable",
    Key: {
      id: productId,
    },
  });

  await dynamoClient.send(command);

  return {
    statusCode: 204,
  };
}
