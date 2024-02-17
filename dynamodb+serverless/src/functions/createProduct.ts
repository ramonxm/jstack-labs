import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import type { APIGatewayProxyEventV2 } from "aws-lambda";
import { randomUUID } from "crypto";
import { dynamoClient } from "../lib/dynamoClient";

export async function handler(event: APIGatewayProxyEventV2) {
  const body = JSON.parse(event.body);

  const id = randomUUID();

  const command = new PutItemCommand({
    TableName: "ProductsTable",
    Item: {
      id: { S: id },
      name: { S: body.name },
      price: { N: `${body.price}` },
      tags: { SS: body.tags },
    },
  });

  const response = await dynamoClient.send(command);

  return {
    statusCode: 201,
    body: JSON.stringify(response),
  };
}
