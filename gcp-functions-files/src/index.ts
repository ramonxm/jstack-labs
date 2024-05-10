import * as ff from '@google-cloud/functions-framework';

ff.http('myFunctionName', (req: ff.Request, res: ff.Response) => {
  res.send('OK');
});