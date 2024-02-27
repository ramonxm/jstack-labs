import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { dynamoClient } from "src/lib/dynamoClient";

export async function handler(event: APIGatewayProxyEventV2) {
  const body = JSON.parse(event.body);
  const { productId } = event.pathParameters;

  const command = new UpdateCommand({
    TableName: "ProductsTable",
    Key: {
      id: productId,
    },
    UpdateExpression: "set #n :n, #p = :p, #t = :t",
    ExpressionAttributeNames: {
      "#n": "name",
      "#p": "price",
      "#t": "tags",
    },
    ExpressionAttributeValues: {
      ":n": body.name,
      ":t": body.tags,
      ":p": body.price,
    },
  });

  await dynamoClient.send(command);

  return {
    statusCode: 204,
  };
}
