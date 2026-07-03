// SAMPLE: Generate text with instructions
// GUIDANCE: Instructions to run this code: https://aka.ms/oai/net/start
#pragma warning disable OPENAI001

#:package OpenAI@2.*
#:property PublishAot=false

using OpenAI.Responses;

string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
ResponsesClient client = new(key);

CreateResponseOptions options = new()
{
    Model = "gpt-5.2",
    Instructions = "Talk like a pirate.",
};
options.InputItems.Add(
    ResponseItem.CreateUserMessageItem("Are semicolons optional in JavaScript?")
);

ResponseResult response = client.CreateResponse(options);

Console.WriteLine(response.GetOutputText());