provider "aws" {
  region = var.region
}


resource "aws_sns_topic" "topic" {
  name =  format("%s-sns-%s", var.environment, var.name_topic)
}


resource "aws_sns_topic_subscription" "email_subscription" {
  for_each = toset(var.email_addresses)  
  topic_arn = aws_sns_topic.topic.arn
  protocol  = "email"
  endpoint  = each.value  
}


output "sns_topic_arn" {
  value = aws_sns_topic.topic.arn
}
