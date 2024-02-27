import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { dynamoClient } from "src/lib/dynamoClient";

export async function handler(event: APIGatewayProxyEventV2) {
  const { productId } = event.pathParameters;

  const command = new GetCommand({
    TableName: "ProductsTable",
    Key: {
      id: productId,
    },
  });

  const { Item } = await dynamoClient.send(command);

  if (!Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Product not found" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(Item),
  };
}
