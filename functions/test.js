exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'sorayeon',
      age: 44,
      email: 'jihwan77@gmail.com'
    })
  }
}